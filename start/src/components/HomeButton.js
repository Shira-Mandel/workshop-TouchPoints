import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from "react-native-normalize";

const HomeButton = ({onPress, style}) => {
    return <TouchableOpacity onPress={onPress} style={StyleSheet.compose(styles.home, style) }>
         <MaterialCommunityIcons name="home-circle" size={normalize(20)} color="#99cc00" />
    </TouchableOpacity>

}
const styles = StyleSheet.create({
    home: {
        position: "absolute",
        left: '0%',
        bottom: '0%',
        zIndex: 1
    }
});

export default HomeButton;