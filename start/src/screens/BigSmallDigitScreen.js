import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, ImageBackground, Dimensions} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import Confetti from "../animations/Confetti";
import Crocodiles from "../components/Crocodiles";
import Three from "../components/Three";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const BigSmallDigitScreen = ({navigation, route}) => {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const [rewardState, setRewardState] = useState('rest');
  const second = route.params.arr[counter].second;
  const first = route.params.arr[counter].first;

    return <ImageBackground style={styles.bgimage} source={require("../../assets/lake.png")} resizeMode="stretch"> 
        <Confetti rewardState={rewardState}/>
        <HomeButton style={{top: "1.5%", left: "1%"}} onPress={() => {navigation.navigate('Home')}}/>
        <View style={first.type==Three? styles.addContainerLeftThree : styles.addContainerLeft}>
         {route.params.arr[counter].first}
         </View>
         <View style={second.type==Three? styles.addContainerThree : styles.addContainer}>
         {route.params.arr[counter].second}
         </View>
        <Crocodiles isLeftBigger={route.params.arr[counter].flag} enableNext={() => setIsDisabled(false)} setReward={() => setRewardState('reward')} reward={rewardState}/> 
        <NextButton disabled={isDisabled} onPress= {() => {
            if (counter >= 4)
            {
                navigation.navigate('Home');
            }
            else
            {
                setIsDisabled(true);
                setCounter(counter + 1);
                setRewardState('rest');
            }
        }}/>
        </ImageBackground> 
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  addContainer: {
    position: "absolute",
    width: isMobile? "30%" : "42%",
    aspectRatio: 1/1,
    justifyContent: "center",
    top: isMobile? "15%" : "15%",
    left: isMobile? "70%" : "63%",
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    shadowRadius: 5,
    shadowOpacity: 1,
},
addContainerLeft: {
  position: "absolute",
  aspectRatio: 1/1,
  width: isMobile? "30%" : "42%",
  justifyContent: "center",
  top: isMobile? "15%" : "15%",
  left: isMobile? "0%" : "-5%",
  shadowColor: "#36393d",
  shadowOffset: { width: 1 },
  shadowRadius: 5,
  shadowOpacity: 1,
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
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "#01dbca",
    flex: 1
  },
  addContainerLeftThree: {
    position: "absolute",
    width: isMobile? "50%" : "70%",
    padding: "10%",
    aspectRatio: 1/1,
    borderRadius: normalize(150),
    bottom: isMobile? "8%" : "13%",
    left: isMobile? "-4%" : "-18%",
},
addContainerThree: {
  position: "absolute",
    width: isMobile? "40%" : "60%",
    aspectRatio: 1/1,
    justifyContent: "center",
    top: isMobile? "-5%" : "0%",
    left: isMobile? "65%" : "55%",
    shadowColor: "#36393d",
    shadowOffset: { width: 1 },
    shadowRadius: 5,
    shadowOpacity: 1,
},
});

export default BigSmallDigitScreen;