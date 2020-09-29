import React,{useState, useEffect}  from "react";
import {Dimensions, TouchableOpacity} from "react-native";
import { Ionicons,Feather } from "@expo/vector-icons";
import { Video } from 'expo-av';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;
const rewardSounds = [<Video
  source={require("../../../assets/sounds/yofi.mp4")}
  shouldPlay={true}
  volume={0.1}
  useNativeControls ={false}/>, 
  <Video
  source={require("../../../assets/sounds/kol-hakavod.mp4")}
  shouldPlay={true}
  volume={0.1}
  useNativeControls ={false}/>,
  <Video
  source={require("../../../assets/sounds/yafeh-meod.mp4")}
  shouldPlay={true}
  isLooping={false}
  volume={0.1}
  useNativeControls ={false}/>,
  <Video
  source={require("../../../assets/sounds/metzuyan.mp4")}
  shouldPlay={true}
  isLooping={false}
  volume={0.1}
  useNativeControls ={false}/>
];

const Circle = ({rewardState, style, count, setCounter, setRewardState, flag}) => {
    const [isPress, setIsPress] = useState(false);

    useEffect(() => {
      if (count == 0)
      {
        setRewardState();
      }
    }, [isPress]);

        return <TouchableOpacity style={style} onPress = {() => {
          setIsPress(true);
          setCounter();
        }} disabled={isPress}>
          {/* {rewardState=='reward' ? sound : null} */}
          <Feather name="circle" size={isMobile? 100 : 200} color={isPress && flag ? 'green' : 'black'}/>
      </TouchableOpacity>
    }

export default Circle;