import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity} from 'react-native';
import { Video, Audio } from 'expo-av';
import HomeScreen from "./src/menus/HomeScreen";
import IntroScreen from './src/menus/IntroScreen';
import LearningDigitsMenuScreen from './src/menus/LearningDigitsMenuScreen';
import DigitsIdScreen from './src/screens/DigitsIdScreen';
import AddingTwinsScreen from './src/menus/AddingTwinsScreen';
import AddingNumbersScreen from './src/menus/AddingNumbersScreen';
import AppInfoScreen from './src/menus/AppInfoScreen';
import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';
import LearningDigitsScreen from './src/screens/LearningDigitsScreen';
import { YellowBox, ImageBackground } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CirclesLinesInShapesIdScreen from './src/screens/CirclesLinesInShapesIdScreen';//
import MemoryAidScreen from './src/screens/MemoryAidScreen';
import * as SplashScreen from 'expo-splash-screen';
import { Asset } from 'expo-asset';

//I18nManager.allowRTL(false);

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.', 'Non-serializable values were found in the navigation state.', 'Failed prop type: Invalid prop `fontSize` of type `string` supplied to `Text`, expected `number`.'
]);

const Stack = createStackNavigator()
 function MyStack() {
   return (
     <Stack.Navigator initialRouteName="Home" headerMode="none" screenOptions= {{title: 'TouchPoints', headerStyle:
     {backgroundColor: 'pink', height: 60}, headerTintColor: '#187cc2', headerTitleAlign: "center",
    headerTitleStyle:{borderColor: 'black', fontWeight: 'bold' },}}>
       <Stack.Screen name="Home" component={HomeScreen} options={{title: 'TouchPoints', headerTitleStyle: {fontSize: 35, fontFamily: 'Arial Rounded MT Bold'}}}/>
       <Stack.Screen name="Intro" component={IntroScreen} options={{title: 'מבוא'}}/>
       <Stack.Screen name="LearningDigitsMenu" component={LearningDigitsMenuScreen} options={{title: 'תפריט לימוד ספרות'}} />
       <Stack.Screen name="IdentifyDigits" component={DigitsIdScreen} options={{title: 'זיהוי ספרות'}}/>
       <Stack.Screen name="AddingTwins" component={AddingTwinsScreen} options={{title: 'חיבור תאומים'}}/>
       <Stack.Screen name="AddingNumbers" component={AddingNumbersScreen} options={{title: 'חיבור מספרים'}}/>
       <Stack.Screen name="AppInfo" component={AppInfoScreen} options={{title: 'מידע'}}/>
       <Stack.Screen name="CirclesLinesId" component={CirclesLinesIdScreen} options={{title: 'זיהוי קווים ועיגולים'}}/>
       <Stack.Screen name="LearningDigits" component={LearningDigitsScreen} options={{title: 'לימוד ספרות'}} />
       <Stack.Screen name="CirclesLinesInShapesId" component={CirclesLinesInShapesIdScreen} options={{title: 'זיהוי עיגולים וקווים מתוך צורות'}}/>
       <Stack.Screen name="MemoryAid" component={MemoryAidScreen} options={{title: 'תומכי זיכרון'}} />
     </Stack.Navigator>
   );
 }

 const downloadAssets = async () => {
  const imageAssets = cacheImages([
    require("./assets/header.png"),
    require("./assets/kid1.png"),
    require("./assets/kid2.png"),
    require("./assets/kid3.png"),
    require("./assets/kid4.png"),
    require("./assets/kid5.png"),
    require("./assets/kid6.png"),
    require("./assets/kid7.png"),
    require("./assets/kid8.png"),
    require("./assets/kid9.png"),
    require("./assets/circle.png"),
    require("./assets/circle-kid.png"),
    require("./assets/croc-left.png"),
    require("./assets/head.jpg"),
    require("./assets/number1.png"),
    require("./assets/number2.png"),
    require("./assets/number3.png"),
    require("./assets/number4.png"),
    require("./assets/number5.png"),
    require("./assets/number6.png"),
    require("./assets/number7.png"),
    require("./assets/number8.png"),
    require("./assets/number9.png"),
    require("./assets/playground.jpg"),
    require("./assets/alice.jpg")
  ]);
}

 export default class App extends React.Component {
  state = {
    appIsReady: false,
  };

  async componentDidMount() {
    // Prevent native splash screen from autohiding
    try {
      await SplashScreen.preventAutoHideAsync();
    } catch (e) {
      console.warn(e);
    }
    this.prepareResources();
  }



  /**
   * Method that serves to load resources and make API calls
   */
  prepareResources = async () => {
    await downloadAssets();
    setTimeout(() => {}, 3000);

    this.setState({ appIsReady: true }, async () => {
      await SplashScreen.hideAsync();
    });
  };

  render() {
    if (!this.state.appIsReady) {
      return null;
    }

    return (
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    );
  }
}

// Put any code you need to prepare your app in these functions




function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aabbcc',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
//  export default function App() {
//    return (
//      <NavigationContainer>
//        <MyStack />
//      </NavigationContainer>
//    );
//  }
