import React,{useState, useEffect}  from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
//import { Feather } from 'expo/vector-icons'
import { IconButton } from "react-native-paper";
import { Ionicons,Feather } from "@expo/vector-icons";
import normalize from "react-native-normalize";


const Circle = ({style, count, setCounter, setRewardState, flag}) => {
    const [isPress, setIsPress] = useState(false);

    useEffect(() => {
      if (count == 0)
      {
        setRewardState();
      }
    }, [isPress]);

        return <TouchableOpacity style={style/*{position: 'absolute', zIndex: 1, backgroundColor: 'black'}*/} onPress = {() => {
          setIsPress(true);
          setCounter();
        }} disabled={isPress}>
          <Feather name="circle" size={100} color={isPress && flag ? 'green' : 'black'}/>
          {/* <Image style={style} source = {image}/> */}
      </TouchableOpacity>
    }

export default Circle;