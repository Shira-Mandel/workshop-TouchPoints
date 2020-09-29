import React, {useState} from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import Confetti from "../animations/Confetti";
import AddingPair from "../components/AddingPair";
import NumbersLine from "../components/NumbersLine";
import { Video } from 'expo-av';



const AddingDiffDigitsScreen = ({navigation, route}) => {
    const [counter, setCounter] = useState(0);
    const [rewardState, setRewardState] = useState('rest');
    const [isDisabled, setIsDisabled] = useState(true);
    const [disabled1, set1Disabled] = useState(true);
    const [disabled2, set2Disabled] = useState(true);
    
    return <View style={styles.mainContainer}>
    <ImageBackground style={styles.bgimage} source={require("../../assets/try2.png")} resizeMode="contain">
        <Confetti rewardState={rewardState}/>
        <HomeButton style={{top: "3%", left: "1%"}} onPress= {() => {navigation.navigate('Home')}}/>
        {<Video
                source={require("../../assets/sounds/continue-count.mp4")}
                shouldPlay={counter==0}
                isLooping={false}
                volume={0.1}
                useNativeControls ={false}/>}
        <AddingPair disabled1={disabled1} set1={() => set1Disabled(false)} set2={() => set2Disabled(false)} disabled2={disabled2} isFirstBigger={route.params.arr[counter].flag} first={route.params.arr[counter].first} second={route.params.arr[counter].second} result={route.params.arr[counter].value}/>
        <NextButton disabled={isDisabled} onPress= {() => {
            if (counter > 3)
            {
                navigation.navigate('Home');
            }
            else
            {
                set1Disabled(true);
                set2Disabled(true);
                setCounter(counter + 1);
                setIsDisabled(true)
                setRewardState('rest');
            }
        }}/>
        <NumbersLine result={route.params.arr[counter].value.toString()} setRewardState={() => {
          setIsDisabled(false)
          setRewardState('reward')
        }} rewardState={rewardState}/>
        </ImageBackground>
         </View>
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#537dc5",
  },
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  list1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
  list2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
    marginBottom: "10%"
  },
  infoIcon: {
      fontSize: normalize(30),
      alignSelf: "flex-start"
  },
  infoStyle: {
      position: "absolute",
      top: "100%",
      left: "2%"
  },
  bgimage: {
    position: "relative",
    height: '95%',
    width: '100%',
    backgroundColor: "#537dc5",
  }
});

export default AddingDiffDigitsScreen;