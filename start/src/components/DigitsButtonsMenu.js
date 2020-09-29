import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity} from "react-native";

const DigitsButtonsMenu = ({title, navigation, digit}) => {
    return <TouchableOpacity onPress = {
        navigation.navigate('LearningDigits', {index: digit - 1})}>
     <Image style ={styles.image} source = {require("../../assets/images/alice.jpg")}/>
        <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
}
const styles = StyleSheet.create({
    image:{
        aspectRatio: 1 / 1,
        //width: 100,
        height: '45%',
        borderRadius: 20,
        //alignSelf: "center"
    },
    text: {
        justifyContent: "center",
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default DigitsButtonsMenu;