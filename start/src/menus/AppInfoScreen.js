import React from "react";
import { Text, StyleSheet, View, Dimensions} from "react-native";
import normalize from "react-native-normalize";
import BackButton from "../components/BackButton"
import Balloons from "../animations/Balloons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

const AppInfoScreen = ({navigation, route}) => {
  return <View style={{justifyContent: "center", height: '100%', width: '100%'}}>
      <View style={styles.textContainer}>
      <Text style={styles.text}>
    אפליקציית TouchPoints עוזרת לילדים בעלי לקות למידה בחשבון. האפליקציה מנגישה שיטה מקצועית ייחודית ששוכללה לאורך שנים תוך עבודה עם ילדים על ידי הלקוחה הראשונה והמאוד מיוחדת של הפרויקט – רונית קידן, אמא של טל.
רונית קידן, מומחית להוראה מתקנת, למדה את השיטה בארה"ב ו"גיירה" אותה תוך כדי שכלול השיטה לחוויה אינטראקטיבית המערבת מספר חושים, שהופכת את לימוד החשבון לחוויה ידידותית גם עבור ילדים עם לקויות למידה.
עד היום השיטה מתבצעת באמצעות נייר. לאפליקציה מעבר להפיכת השיטה לנגישה יותר עבור מטפלים ומורים ללקויי למידה יש יתרונות נוספים בשיפור החוויה עבור הילדים ושיפור המעקב המקצועי עבור המטפלים בארץ ובעולם.
    </Text>
      </View>
  <BackButton onPress={() => navigation.goBack()}/>
  <Balloons style={styles.anim}/>
    </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(9),
    lineHeight: isMobile? 30 : 50,
    writingDirection: 'rtl',
    textAlign: "center",
  },
  textContainer: {
    zIndex: 1, 
    width: "88%",
    borderRadius: 20,
    borderWidth: 10,
    borderColor: "white",
    backgroundColor: "white",
    margin: normalize(25),
    marginTop: normalize(20),
    padding: isMobile? 5 : 20,
    shadowOffset: { width: 0.5 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    left: isMobile? "0.5%" : "0%"
  },
  anim: {
    position: "relative",
    flex: 1,
  }
});

export default AppInfoScreen;