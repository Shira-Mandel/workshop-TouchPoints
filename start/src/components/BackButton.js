import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from "react-native-normalize";

const BackButton = ({onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.home}>
         <MaterialCommunityIcons name="arrow-left-circle" size={normalize(30)} color="black" />
    </TouchableOpacity>
    
}
const styles = StyleSheet.create({
    home: {
        position: "absolute",
        left: '1%',
        top: '2%',
        zIndex: 1
    }
});

export default BackButton;