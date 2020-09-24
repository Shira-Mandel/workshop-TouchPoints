import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions} from "react-native";
import BigSmallButton from "../components/BigSmallButton"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import normalize from "react-native-normalize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const DiffDigitsButton = ({onPress, style}) => {
      return <View style={style}>
          <TouchableOpacity onPress={onPress} style={{height: "100%", width: "100%", zIndex: 1}}/>
          <BlurView intensity={90} style={[StyleSheet.absoluteFill, {borderRadius: 20}]}>
            <BigSmallButton style={{aspectRatio: 1 / 1,
    height: '40%',
    borderRadius: normalize(5),
    zIndex: 1,
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    left: "5%", 
    top: "30%",
    position: "absolute"}} noText={true}/>
            <View style={styles.buttonMenu2}>
             <Image style={styles.img} resizeMode="contain" source={require("../../assets/images/addIcon.png")}/>
            </View>
      </BlurView>
      <Text style={styles.text}>ספרות שונות</Text>
      </View>
  };
  
  const styles = StyleSheet.create({
    buttonMenu1: {
        aspectRatio: 1 / 1,
        height: '40%',
        borderRadius: normalize(5),
        zIndex: 1,
        borderWidth: 0.5,
        borderColor: "green",
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
        borderRadius: normalize(5),
        backgroundColor: "#537dc5"
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
  
  export default DiffDigitsButton;