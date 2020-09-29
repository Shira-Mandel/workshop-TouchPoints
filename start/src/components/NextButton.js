import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from "react-native-normalize";

const NextButton = ({onPress, disabled}) => {
    return <TouchableOpacity onPress={onPress} style={styles.next} disabled={disabled}>
              <MaterialCommunityIcons name="arrow-right-circle" size={normalize(40)} color="#ff6905" />
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    next: {
        position: "absolute",
        right: '0%',
        top: '3%',
        zIndex: 1
    },

});

export default NextButton;