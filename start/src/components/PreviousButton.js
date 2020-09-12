import React from "react";
import { StyleSheet, TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import normalize from "react-native-normalize";

const PreviousButton = ({onPress}) => {
    return <TouchableOpacity onPress={onPress} style={styles.next}>
              <MaterialCommunityIcons name="arrow-left-circle" size={normalize(40)} color="#ff6905" />
    </TouchableOpacity>
}
const styles = StyleSheet.create({
    next: {
        position: "absolute",
        left: '0%',
        top: '0%',
        zIndex: 1
    },

});

export default PreviousButton;