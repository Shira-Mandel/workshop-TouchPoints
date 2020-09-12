import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity,ImageBackground, Dimensions} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import Confetti from "../animations/Confetti";
import NumbersLine from "../components/NumbersLine";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const AddingTwinsScreen = ({navigation, route}) => {
    const [counter, setCounter] = useState(0);
    const [rewardState, setRewardState] = useState('rest');

    return <View style={styles.mainContainer}>
    <ImageBackground style={styles.bgimage} source={require("../../assets/try2.png")} resizeMode="contain">
        <Confetti rewardState={rewardState}/>
        <HomeButton style={{top: "3%", left: "1%"}} onPress= {() => {navigation.navigate('Home')}}/>
        <View style={styles.semiContainer}>
        <View style={styles.addContainerLeft}>
        {route.params.arr[counter].digit}
        </View>
        <View style={styles.addContainer}>
        {route.params.arr[counter].digit}
        </View>
        </View>
        <NextButton onPress= {() => {
            if (counter >= 3)
            {
                navigation.navigate('Home');
            }
            else
            {
                setCounter(counter + 1);
                setRewardState('rest');
            }
        }}/>
        <NumbersLine result={route.params.arr[counter].value.toString()} setRewardState={() => setRewardState('reward')}/>
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
}
});

export default AddingTwinsScreen;