import React from "react";
import { Text, StyleSheet, View, ImageBackground} from "react-native";
import ButtonsMenu from "../components/ButtonsMenu"
import { Entypo } from "@expo/vector-icons";
import { Col, Row, Grid } from "react-native-easy-grid";
import normalize from "react-native-normalize";


const IntroScreen = ({navigation}) => {
  return <ImageBackground style={styles.bgimage} source={require("../../assets/stars.png")} resizeMode="cover">
    <Grid>
  <Row style= {styles.list1}>
    <ButtonsMenu title = "זיהוי קווים ועיגולים" navigate = {() => navigation.navigate('CirclesLinesId')}/>
    <ButtonsMenu title = "זיהוי קווים ועיגולים מתוך שלל צורות" navigate = {() => navigation.navigate('CirclesLinesInShapesId')}/>
  </Row>
  <Row style={styles.list2}>
    <ButtonsMenu title = "תומכי זכרון לקווים ועיגולים" navigate= {() => navigation.navigate('MemoryAid')}/>
  </Row>
</Grid>
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
    flex: 1,
  }
});

export default IntroScreen;