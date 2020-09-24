import React, {useState, useEffect} from "react";
import {TouchableOpacity, StyleSheet} from "react-native";
import { Video, Audio } from 'expo-av';



const Point = ({isAdd, unpressedStyle, pressedStyle, setRewardState, setCounter, count}) => {
    const [isPress, setIsPress] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [myStyle, setStyle] = useState(unpressedStyle);

    const bubble = <Video
  source={require("../../assets/bubble.mp3")}
  shouldPlay={isPlay}
  isLooping={false}
  volume={0.1}
  useNativeControls ={false}
/>

    useEffect(() => {

        if (isPress)
        {
            setIsPlay(true);
            setStyle(pressedStyle);
        }

        if (count == 0) {
            if (!isAdd) {
                setRewardState();
            }
        }
      }, [isPress]);

return <TouchableOpacity style={isAdd? StyleSheet.compose(styles.trans, myStyle) : myStyle} onPress={() =>
              { 
                setIsPress(true);
                setCounter();
                }} disabled={isPress}>
                    {bubble}
                    </TouchableOpacity>
            };
const styles = StyleSheet.create({
    trans: {
        backgroundColor: "yellow",
    }
})


export default Point;