import React from "react";
import { Text, StyleSheet, View, ImageBackground, SafeAreaView, ScrollView} from "react-native";
import normalize from "react-native-normalize";
import BackButton from "../components/BackButton"
import Balloons from "../animations/Balloons";


const AppInfoScreen = ({navigation, route}) => {
  return <View style={{justifyContent: "center", height: '100%', width: '100%'}}>
    <ImageBackground source={require('../../assets/note.png')} resizeMode='contain' style={styles.bgimage}>
      {/* <View style={{transform: [{rotate: '2deg'}],  height: "78.6%", aspectRatio: 1/1, borderWidth: 8}}/> */}
    <Text style={styles.textContainer}>
    האפליקציה פותחה על מנת ללמד ילדים, ובפרט ילדים בעלי לקויות למידה חשבון בסיסי: למנות ולחבר ספרות עד 10.
    קהל היעד הוא ילדים בגילאי גן חובה ועד כיתה א', השיטה פותחה על ידי רונית קידן, מורה להוראה מתקנת, שביקשה ליצור חוויה אינטרקטיבית עבור הילדים.
    על השיטה: על כל ספרה ישנה כמות מתאימה של נקודות (לדוגא לספרה 1 ישנה נקודה אחת), כאשר המטרה היא שהילדים יזכרו את מיקומי הנקודות ויצליחו באמצעות מנייה לשיים את הספרות ובכך לזכור אותן.
    וכמו כן, להשתמש בשיטה על מנת להצליח לחבר ספרות עד עשר.
    </Text>
  </ImageBackground>
  <BackButton onPress={() => navigation.goBack()}/>
  <Balloons style={styles.anim}/>
    </View>
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: normalize(10),
    writingDirection: 'rtl',
    width: '20%'
  },
  textContainer: {
    transform: [{rotate: '2deg'}],  
    height: "78.6%", 
    aspectRatio: 1/1,
    borderWidth: 8,
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: normalize(9),
    margin: normalize(25),
    marginTop: normalize(20),
    lineHeight: 39,
    padding: "2%",
    writingDirection: 'rtl',
    transform: [{rotate: '2deg'}]
  },
  bgimage: {
    position: "relative",
    flex: 1,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  anim: {
    position: "relative",
    flex: 1,
  }
});

export default AppInfoScreen;