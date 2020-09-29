import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image, Dimensions} from "react-native";
import { BlurView } from 'expo-blur';
import normalize from "react-native-normalize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const IntroButton = ({noText, onPress, style}) => {
    return <View style={style}>
          <TouchableOpacity onPress={onPress} style={{height: "100%", width: "100%", zIndex: 1}}/>
          <BlurView intensity={90} style={[StyleSheet.absoluteFill, {borderRadius: 20}]}>
          <View style={styles.buttonMenu1}>
             <Image style={styles.img} resizeMode="cover" source={require("../../assets/images/linesCirclesIDIcon.png")}/>
            </View>
            <View style={styles.buttonMenu2}>
             <Image style={styles.img} resizeMode="cover" source={require("../../assets/images/circlesLineShapesIcon.png")}/>
            </View>
            <View style={styles.buttonMenu3}>
             <Image style={styles.img} resizeMode="cover" source={require("../../assets/images/memAidIcon.png")}/>
            </View>
      </BlurView>
      <Text style={styles.text}>קווים ועיגולים</Text>
      </View>
  };
  
  const styles = StyleSheet.create({
    buttonMenu1: {
        aspectRatio: 1 / 1,
        height: '40%',
        borderRadius: normalize(5),
        zIndex: 1,
        shadowOffset: { width: 0.5 },
        shadowOpacity: 0.5,
        left: "5%", 
        top: "8%",
        position: "absolute"
      },
      buttonMenu2: {
        aspectRatio: 1 / 1,
        height: '40%',
        borderRadius: normalize(5),
        zIndex: 1,
        shadowOffset: { width: 0.5 },
        shadowOpacity: 0.5,
        right: "5%", 
        top: "8%",
        position: "absolute"
      },
    img: {
        height: "100%",
        width: "100%",
        borderRadius: normalize(5),
    },
    buttonMenu3: {
        aspectRatio: 1 / 1,
        height: '40%',
        borderRadius: normalize(5),
        zIndex: 1,
        shadowOffset: { width: 0.5 },
        shadowOpacity: 0.5,
        right: "30%", 
        bottom: "6%",
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
  
  export default IntroButton;