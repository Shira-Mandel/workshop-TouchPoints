import React, {useEffect, useState} from "react";
import { Dimensions, StyleSheet, View,TouchableOpacity} from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const LineHorizontal = ({style, count, setCounter, setRewardState, flag}) => {

  const [isPress, setIsPress] = useState(false);

    useEffect(() => {
      if (count == 0)
      {
        setRewardState();
      }
    }, [isPress]);

    return  <View style={StyleSheet.compose(isPress? styles.viewpressed : styles.viewunpressed,style)}>
    <TouchableOpacity onPress = {() => {
      setIsPress(true);
      setCounter();
    }} disabled={isPress} style={{zIndex:1, height:'100%', width:'100%'}}/>
      </View>
}
const styles = StyleSheet.create({
viewunpressed:{
  backgroundColor: "black"
},
viewpressed:{
  backgroundColor: "green"
}
})
export default LineHorizontal;