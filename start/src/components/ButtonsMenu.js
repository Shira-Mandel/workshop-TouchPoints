import React from "react";
import { Dimensions, Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const ButtonsMenu = ({style, title, navigate, source, resize}) => {
    return <View style={style} >
    <TouchableOpacity onPress={navigate}>
     <Image style={{height: "100%", borderRadius: 20, width: "100%"}} source={source} resizeMode={resize}/>
    </TouchableOpacity>
     <Text style={styles.text}>{title}</Text>  
     </View> 

}
const styles = StyleSheet.create({
    image:{
        aspectRatio: 1 / 1,
        height: '50%',
        borderRadius: 20,
    },
    text: {
        fontSize: isMobile? 14 : 25,
        fontWeight: "bold",
        textAlign: "center",
    }
});

export default ButtonsMenu;