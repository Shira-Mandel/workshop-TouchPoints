import React from "react";
import { TouchableOpacity, Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import NumbersLine from "./NumbersLine";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const AddingPair = ({isDisabled, setIsDisabled, isFirstBigger, first, second, setReward, result}) => {
    return <View style={styles.mainContainer}>
         <Text style={styles.Text1}>+</Text>
         <View style={styles.addContainerLeft}>
         <TouchableOpacity onPress={() => {
             if (isFirstBigger) {
                 alert("great job!")
                 setIsDisabled();
             }
         }} disabled={isDisabled}>
         {first}
         </TouchableOpacity>
         </View>
         <View style={styles.addContainer}>
         <TouchableOpacity onPress={() => {
             if (!isFirstBigger) {
                 alert("great job!")
                 setIsDisabled();
             }
         }} disabled={isDisabled}>
         {second}
         </TouchableOpacity>
         </View>
        {/* <NumbersLine result={result.toString()} setRewardState={() => {
            setReward();
            }}/> */}
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        // width: windowWidth,
        // height: windowHeight,
        flex: 1,
        position:'relative',
    },
      bgimage:{
          flex: 1,
          position: "absolute",
          marginTop: "2%",
          borderRadius: 20,
          height: hp('20%'),
          width: isMobile? wp('40%') : wp('90%'),
          top: isMobile? wp('15%') : wp('90%'),
          left: isMobile? wp('17%') : wp('90%'),
          shadowColor: "#36393d",
          shadowOffset: { width: 1 },
          shadowRadius: 5,
          shadowOpacity: 1,
          direction: 'ltr',
      },
    button: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '13%',
        borderRadius: normalize(35),
        left: isMobile? "55%" : '70%',
        top: isMobile? '0%': '8%'

      },
      bgimage2:{
        flex: 1,
          position: "absolute",
          marginTop: "2%",
          borderRadius: 20,
          height: hp('20%'),
          width: isMobile? wp('40%') : wp('90%'),
          top: isMobile? wp('15%') : wp('90%'),
          left: isMobile? wp('37%') : wp('90%'),
          shadowColor: "#36393d",
          shadowOffset: { width: 1 },
          shadowRadius: 5,
          shadowOpacity: 1,
          direction: 'ltr',
      },
    button2: {
        position: "absolute",
        backgroundColor: "black",
        aspectRatio: 1 / 1,
        height: '13%',
        borderRadius: normalize(35),
        left: isMobile? "55%" : '70%',
        top: isMobile? '0%': '8%'
      },
      Text1: {
        fontSize:isMobile? 60: 50,
        color: "black", 
        fontWeight: 'bold',
        left: isMobile? "0%" : '70%',
        top: isMobile? '8%': '8%'
      },
      Text2: {
        fontSize:isMobile? 60: 50,
        color: "black", 
        fontWeight: 'bold',
        left: isMobile? "0%" : '70%',
        top: isMobile? '0%': '8%'
      },
      addContainer: {
        position: "absolute",
        width: isMobile? "15%" : "25%",
        aspectRatio: 1/1,
        borderRadius: 150,
        backgroundColor: "pink",
        top: isMobile? "22%" : "22%",
        left: isMobile? "52%" : "54%",
    },
    addContainerLeft: {
      position: "absolute",
      width: isMobile? "15%" : "25%",
      aspectRatio: 1/1,
      borderRadius: 150,
      backgroundColor: "pink",
      top: isMobile? "22%" : "22%",
      left: isMobile? "32%" : "21%",
  }
});

export default AddingPair;