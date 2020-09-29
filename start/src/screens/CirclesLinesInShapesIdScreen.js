import React, {useState} from "react";
import { StyleSheet, ImageBackground} from "react-native";
import normalize from "react-native-normalize";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import CirclesShapesId from "../components/intro/CirclesShapesId";
import LinesShapesId from "../components/intro/LinesShapesId";


const CirclesLinesInShapesIdScreen = ({navigation}) => {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);
    const patterns = [
      { name: <LinesShapesId enableNext={() => setIsDisabled(false)}></LinesShapesId>},
      { name: <CirclesShapesId enableNext={() => setIsDisabled(false)}></CirclesShapesId>},
   ];
   
    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
        <HomeButton onPress={() => navigation.navigate('Home')}/>
        {patterns[counter].name}
        <NextButton disabled={isDisabled} onPress={() => {
            if (counter >= patterns.length - 1)
            {
                navigation.navigate('Intro');
            }
            else
            {
                setIsDisabled(true)
                setCounter(counter + 1)
            }
        }}/>
        </ImageBackground>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  list1: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
  list2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: "center",
    marginBottom: "10%"
  },
  infoIcon: {
      fontSize: normalize(30),
      alignSelf: "flex-start"
  },
  infoStyle: {
      position: "absolute",
      top: "100%",
      left: "2%"
  },
  bgimage: {
    position: "relative",
    flex: 1
  }
});

export default CirclesLinesInShapesIdScreen;