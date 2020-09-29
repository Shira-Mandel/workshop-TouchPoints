import React, {useState} from "react";
import { Dimensions, StyleSheet, ImageBackground} from "react-native";
import HomeButton from "../components/HomeButton";
import NextButton from "../components/NextButton";
import CirclesId from "../components/intro/CirclesId";
import LinesId from "../components/intro/LinesId";
import LinesAndCirclesId from "../components/intro/LinesAndCirclesId";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height - 60;

const CirclesLinesIdScreen = ({navigation}) => {
    const [counter, setCounter] = useState(0);
    const [isDisabled, setIsDisabled] = useState(true);

    const patterns = [
      { name: <LinesId enableNext={() => setIsDisabled(false)}></LinesId>},
      { name: <CirclesId enableNext={() => setIsDisabled(false)}></CirclesId>},
      { name: <LinesAndCirclesId enableNext={() => setIsDisabled(false)}></LinesAndCirclesId>},
   ]; 
   
    return <ImageBackground style={styles.bgimage} source={require("../../assets/playground.jpg")} resizeMode="cover"> 
        <HomeButton onPress={() => {navigation.navigate('Home')}}/>
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
  bgimage: {
    position: "relative",
    flex: 1
  }
});

export default CirclesLinesIdScreen;