import React, {useState, useEffect} from "react";
import {TouchableOpacity} from "react-native";

const Point = ({isAdd, unpressedStyle, pressedStyle, setRewardState, setCounter, count}) => {
    const [isPress, setIsPress] = useState(false);
    const [thisCounter, setThisCounter] = useState(count);
    const [myStyle, setStyle] = useState(unpressedStyle);

    useEffect(() => {

        if (isPress)
        {
            setStyle(pressedStyle);
        }

        if (count == 0) {
            if (!isAdd) {
                setRewardState();
            }
        }
      }, [isPress]);

return <TouchableOpacity style={myStyle} onPress={() =>
              { 
                setIsPress(true);
                setCounter();
                }} disabled={isPress}/>
            };



export default Point;