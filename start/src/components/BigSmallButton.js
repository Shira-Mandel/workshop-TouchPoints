import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import normalize from "react-native-normalize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const BigSmallButton = ({onPress, style, noText}) => {
    const text = noText? null : <Text style={styles.text}>גדול קטן</Text>;
      return <View style={style}>
          <TouchableOpacity onPress={onPress} style={{height: "100%", width: "100%", zIndex: 1}}/>
          <BlurView intensity={90} style={[StyleSheet.absoluteFill, {borderRadius: normalize(5), shadowColor: "#36393d", shadowOffset: { width: 10 },
    shadowRadius: 20,
    shadowOpacity: 0.5}]}>
            <View style={styles.buttonMenu1}>
             <Image style={styles.img} resizeMode="cover" source={require("../../assets/images/bigSmallIcon1.png")}/>
            </View>
            <View style={styles.buttonMenu2}>
             <Image style={styles.img} resizeMode="cover" source={require("../../assets/images/bigSmallIcon2.png")}/>
            </View>
      </BlurView>
      {text}
      </View>
  };
  
  const styles = StyleSheet.create({
    buttonMenu1: {
        aspectRatio: 1 / 1,
        height: '40%',
        borderRadius: normalize(5),
        zIndex: 1,
        shadowOffset: { width: 0.5 },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        left: "5%", 
        top: "30%",
        position: "absolute"
      },
      buttonMenu2: {
        aspectRatio: 1 / 1,
        height: '40%',
        borderRadius: normalize(5),
        zIndex: 1,
        shadowOffset: { width: 0.5 },
        shadowRadius: 5,
        shadowOpacity: 0.5,
        right: "5%", 
        top: "30%",
        position: "absolute"
      },
    img: {
        height: "100%", 
        width: "100%", 
        borderRadius: normalize(5)
    },
    bgimage: {
      position: "relative",
      flex: 1,
    },
    text: {
        fontSize: isMobile? 14 : 25,
        fontWeight: "bold",
        textAlign: "center",
    }
  });
  
  export default BigSmallButton;