import React, {useState} from "react";
import { StyleSheet, View, ImageBackground, Dimensions} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import Confetti from "../animations/Confetti";
import Three from "../components/Three";
import NumbersLine from "../components/NumbersLine";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const AddingTwinsScreen = ({navigation, route}) => {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [rewardState, setRewardState] = useState('rest');

    return <View style={styles.mainContainer}>
    <ImageBackground style={styles.bgimage} source={require("../../assets/try2.png")} resizeMode="contain">
        <Confetti rewardState={rewardState}/>
        {<Video
                source={require("../../assets/sounds/add-numbers.mp4")}
                shouldPlay={counter==0}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>}
        <HomeButton style={{top: "3%", left: "1%"}} onPress= {() => {navigation.navigate('Home')}}/>
        <View style={styles.semiContainer}>
        <View style={route.params.arr[counter].digit.type==Three? styles.addContainerLeftThree : styles.addContainerLeft}>
        {route.params.arr[counter].digit}
        </View>
        <View style={route.params.arr[counter].digit.type==Three? styles.addContainerThree : styles.addContainer}>
        {route.params.arr[counter].digit}
        </View>
        </View>
        <NextButton disabled={isDisabled} onPress= {() => {
            if (counter >= 3)
            {
                navigation.navigate('Home');
            }
            else
            {
                setCounter(counter + 1);
                setRewardState('rest');
                setIsDisabled(true)
            }
        }}/>
        <NumbersLine result={route.params.arr[counter].value.toString()} setRewardState={() => {
          setIsDisabled(false)
          setRewardState('reward')}} rewardState={rewardState}/>
        </ImageBackground>
         </View>
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#537dc5",
  },
  semiContainer: {
    flex: 1,
    position:'relative',
    borderTopWidth: 8,
    borderColor: "#537dc5"
},
  bgimage: {
    position: "relative",
    height: '95%',
    width: '100%',
    backgroundColor: "#537dc5",
  },
  addContainer: {
    position: "absolute",
    padding: "10%",
    width: isMobile? "22%" : "33%",
    aspectRatio: 1/1,
    borderRadius: normalize(150),
    top: isMobile? "2%" : "8%",
    left: isMobile? "53%" : "54%",
},
addContainerLeft: {
  position: "absolute",
  width: isMobile? "22%" : "33%",
  padding: "10%",
  aspectRatio: 1/1,
  borderRadius: normalize(150),
  top: isMobile? "2%" : "8%",
  left: isMobile? "26%" : "14%",
},
addContainerLeftThree: {
  position: "absolute",
  width: isMobile? "32%" : "42%",
  padding: "10%",
  aspectRatio: 1/1,
  borderRadius: normalize(150),
  bottom: isMobile? "24%" : "30%",
  left: isMobile? "23%" : "12%",
},
addContainerThree: {
  position: "absolute",
  padding: "10%",
  width: isMobile? "32%" : "45%",
  aspectRatio: 1/1,
  borderRadius: normalize(150),
  bottom: isMobile? "24%" : "30%",
  left: isMobile? "50%" : "50%",
},
});

export default AddingTwinsScreen;