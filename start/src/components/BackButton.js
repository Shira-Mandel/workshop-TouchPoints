import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from "react-native-normalize";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const BackButton = ({onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.home}>
         <MaterialCommunityIcons name="arrow-left-circle" size={isMobile? 50 : normalize(30)} color="black" />
    </TouchableOpacity>
    
}
const styles = StyleSheet.create({
    home: {
        position: "absolute",
        left: '1%',
        top: isMobile? '6%' : '87%',
        zIndex: 1
    }
});

export default BackButton;