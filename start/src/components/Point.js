import React, {useState, useEffect} from "react";
import { Text, Dimensions, View, Image, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable/';
import moneyFront from '../../assets/money-front.png';
import moneyBack from '../../assets/money-back.png';
import { IconButton } from "react-native-paper";
import normalize from "react-native-normalize";



const Point = ({ unpressedStyle, pressedStyle, setRewardState, setCounter, count}) => {
    const [isPress, setIsPress] = useState(false);
    const [thisCounter, setThisCounter] = useState(count);
    const [myStyle, setStyle] = useState(unpressedStyle);

    useEffect(() => {

        if (isPress)
        {
            setStyle(pressedStyle);
        }

        if (count == 0) {
            console.log('reward');
            setRewardState();
        }
      }, [isPress]);

return <TouchableOpacity style={myStyle} onPress={() =>
              { 
                setIsPress(true);
                setCounter();
                }} disabled={isPress}/>
            };



export default Point;