import React, {useState} from "react";
import { StyleSheet, View, TouchableOpacity, Text, Dimensions} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import normalize from "react-native-normalize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const LearningDigitsButton = ({onPress, style}) => {
      return <View style={style}>
          <TouchableOpacity onPress={onPress} style={{height: "100%", width: "100%", zIndex: 1}}/>
          <BlurView intensity={90} style={[StyleSheet.absoluteFill, {borderRadius: 20}]}>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid1.png")} style={styles.buttonMenu1}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid2.png")} style={styles.buttonMenu2}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid3.png")} style={styles.buttonMenu3}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid4.png")} style={styles.buttonMenu4}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid5.png")} style={styles.buttonMenu5}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid6.png")} style={styles.buttonMenu6}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid7.png")} style={styles.buttonMenu7}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid8.png")} style={styles.buttonMenu8}/>
          <ButtonsMenu disabled={true} resize="contain" source={require("../../assets/images/kid9.png")} style={styles.buttonMenu9}/>
      </BlurView>
      <Text style={styles.text}>לימוד ספרות</Text>
      </View>
  };
  
  const styles = StyleSheet.create({
    buttonMenu1: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      left: "5%", 
      top:  "5%",
      position: "absolute"
    },
    buttonMenu2: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      left: "36%", 
      top: "5%",
      position: "absolute"
    },
    buttonMenu3: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      right: "5%", 
      top: "5%",
      position: "absolute"
    },
    buttonMenu4: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      left: "5%", 
      top: "36%",
      position: "absolute"
    },
    buttonMenu5: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      left: "36%", 
      top: "36%", 
      position: "absolute"
    },
    buttonMenu6: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      right: "5%", 
      top: "36%", 
      position: "absolute"
    },
    buttonMenu7: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      left: "5%", 
      bottom: "5%", 
      position: "absolute"
    },
    buttonMenu8: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      left: "36%", 
      bottom: "5%", 
      position: "absolute"
    },
    buttonMenu9: {
      aspectRatio: 1 / 1,
      height: '28%',
      borderRadius: 10,
      zIndex: 1,
      borderWidth: 0.5,
      borderColor: "grey",
      right: "5%", 
      bottom: "5%", 
      position: "absolute"
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
  
  export default LearningDigitsButton;