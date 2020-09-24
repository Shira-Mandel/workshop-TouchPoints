import React, {useEffect, useState} from "react";
import { TouchableOpacity, Button, Text, StyleSheet, View, Image, ImageBackground, Dimensions} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import normalize from "react-native-normalize";
import Three from "./Three";
import NumbersLine from "./NumbersLine";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const AddingPair = ({disabled1, disabled2, set1, set2, isFirstBigger, first, second}) => {
  const First = first.type;
  const Second = second.type;

    return <View style={styles.mainContainer}>
         <View style={first.type==Three? styles.addContainerLeftThree : styles.addContainerLeft}>
         <TouchableOpacity onPress={() => {
             if (isFirstBigger) {
              set2();
             }
         }} disabled={!(disabled1 && disabled2)}>
         <First disabled={disabled1} isAdd={true} isNaked={true}/>
         </TouchableOpacity>
         </View>
         <View style={second.type==Three? styles.addContainerThree : styles.addContainer}>
         <TouchableOpacity onPress={() => {
             if (!isFirstBigger) {
               set1();
             }
         }} disabled={!(disabled1 && disabled2)}>
          <Second disabled={disabled2} isAdd={true} isNaked={true}/>
         </TouchableOpacity>
         </View>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        position:'relative',
        borderTopWidth: 8,
        borderColor: "#537dc5"
    },
      addContainer: {
        position: "absolute",
        padding: "15%",
        width: isMobile? "22%" : "33%",
        aspectRatio: 1/1,
        borderRadius: normalize(150),
        top: isMobile? "2%" : "8%",
        left: isMobile? "53%" : "54%",
    },
    addContainerLeft: {
      position: "absolute",
      width: isMobile? "22%" : "33%",
      padding: "15%",
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

export default AddingPair;