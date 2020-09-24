import React, {useState} from "react";
import { Dimensions, StyleSheet, View, Image} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import normalize from "react-native-normalize";
import Balloons from "../animations/Balloons";
import BackButton from "../components/BackButton"
import BigSmallButton from "../components/BigSmallButton"
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const AddingNumbersScreen = ({navigation, route}) => {

  React.useEffect(
    () => navigation.addListener('focus', () => route.params.play()),
    []
  );

  return <View style={{height: '100%', width: '100%'}}>
    <Image style={{zIndex: 1, height: "30%", width: '100%', alignSelf: "center"}} resizeMode="contain" source={require('../../assets/header.png')}/>
    <BigSmallButton style={styles.buttonMenu1} onPress={() => {
      //route.params.pause()
      navigation.navigate('BigSmallMenu', {play: () => route.params.play(), pause: () => route.params.pause(), arr: route.params.arr})}}/>
    {/* <ButtonsMenu resize="cover" source={require("../../assets/images/alice.jpg")} style={styles.buttonMenu1} title = "גדול קטן" navigate={() => {
      //route.params.pause()
      navigation.navigate('BigSmallMenu', {play: () => route.params.play(), pause: () => route.params.pause(), arr: route.params.arr})}}/> */}
    <ButtonsMenu resize="contain" source={require("../../assets/addIcon.png")} style={styles.buttonMenu2} title = "חיבור" navigate = {() => {
      route.params.pause();
      navigation.navigate('AddingDiffDigits', {arr: route.params.arr})}}/>
  <Balloons style={styles.bgimage}/>
  <BackButton onPress={() => navigation.goBack()}/>
</View>
};

const styles = StyleSheet.create({
  buttonMenu1: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    left: isMobile? "25%" : "20%", 
    top: "30%",
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: "absolute"
  },
  buttonMenu2: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    left: isMobile? "65%" : "61%", 
    top: "30%",
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    position: "absolute",
    backgroundColor: "#537dc5"
  },
  buttonMenu3: {
    aspectRatio: 1 / 1,
    height: '25%',
    borderRadius: 20,
    zIndex: 1,
    borderWidth: 1,
    left: isMobile? "45%" : "40%", 
    top: isMobile? "62%" : "65%",
    position: "absolute"
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
    marginBottom: "10%",
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
    flex: 1,
  }
});

export default AddingNumbersScreen;