import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";

const ButtonsMenu = ({title, navigate}) => {
    return <TouchableOpacity onPress = {navigate}>
     <Image style ={styles.image} source = {require("../../assets/alice.jpg")}/>
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

export default ButtonsMenu;