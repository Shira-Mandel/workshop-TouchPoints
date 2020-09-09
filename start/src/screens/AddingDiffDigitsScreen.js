import React, {useState, useEffect} from "react";
import { Text, StyleSheet, View, TouchableOpacity,ImageBackground, Image} from "react-native";
import ButtonsMenu from "../components/HomeButton"
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import shuffleDeck from "../menus/HomeScreen";
import NextButton from "../components/NextButton";
import OneTwins from "../components/twins/OneTwins";
import Confetti from "../animations/Confetti";
import AddingPair from "../components/AddingPair";
import NumbersLine from "../components/NumbersLine";



const AddingDiffDigitsScreen = ({navigation, route}) => {
    //const [first, setFirst] = useState(route.params.arr[0].first);
    //const [second, setSecond] = useState(route.params.arr[0].second);
    const [counter, setCounter] = useState(0);
    const [rewardState, setRewardState] = useState('rest');
    const [isDisabled, setIsDisabled] = useState(false);
    console.log(route.params.arr[0].value);

    return <View style={styles.mainContainer}> 
    <ImageBackground style={styles.bgimage} source={require("../../assets/addingFace.jpg")} resizeMode="contain"> 
        <Confetti rewardState={rewardState}/>
        <HomeButton onPress= {() => {navigation.navigate('Home')}}/>
        <AddingPair isDisabled={isDisabled} setIsDisabled={() => setIsDisabled(true)} isFirstBigger={route.params.arr[counter].flag} first={route.params.arr[counter].first} second={route.params.arr[counter].second} setReward={() => setRewardState('reward')} result={route.params.arr[counter].value}/>
        <NextButton onPress= {() => {
            if (counter >= 4)
            {
                navigation.navigate('Home');
            }
            else
            {
                //setFirst(route.params.arr[counter + 1].first);
                //setSecond(route.params.arr[counter + 1].second);
                setCounter(counter + 1);
                setRewardState('rest');
                setIsDisabled(false)
            }
        }}/>
        <NumbersLine result={route.params.arr[counter].value.toString()} setRewardState={() => setRewardState('reward')}/>
        </ImageBackground>
        </View>
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#01dbca"
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
    height: '100%',
    width: '100%',
    backgroundColor: "#01dbca",
    flex: 0.8,
  }
});

export default AddingDiffDigitsScreen;