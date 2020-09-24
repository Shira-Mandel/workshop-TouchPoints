import React, {useState} from "react";
import { View, StyleSheet, TouchableOpacity} from "react-native";
import { Foundation } from '@expo/vector-icons';
import normalize from "react-native-normalize";

const Hint = ({currDigit, style}) => {
    const Hint = currDigit;
    const [myStyle, setStyle] = useState({});
    return <View style={{position: "absolute", height: "100%", width: "100%"}}>
        <TouchableOpacity onPressIn={() => {
        setStyle(styles.hintContainer)
    }} onPressOut={() => setStyle({})} style={StyleSheet.compose(styles.home, style) }>
         <Foundation name="magnifying-glass" size={normalize(30)} color="brown" />
    </TouchableOpacity>
    <View style={myStyle}>
            <Hint/>
        </View>
    </View>

}
const styles = StyleSheet.create({
    home: {
        position: "absolute",
        left: '3%',
        top: '3%',
        zIndex: 1
    },
    hintContainer: {
        borderRadius: normalize(25), 
        left: "3%", 
        top: "18%", 
        height: "30%",
        width: "25%", 
        position: "absolute",
        backgroundColor: "white",
        
    }
});

export default Hint;