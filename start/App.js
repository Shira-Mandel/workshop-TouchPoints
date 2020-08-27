import { createAppContainer } from 'react-navigation';
import * as React from 'react';
import { I18nManager, StyleSheet} from 'react-native';
//import { createStackNavigator } from 'react-navigation-stack';
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
//import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';//
import CirclesLinesInShapesIdScreen from './src/screens/CirclesLinesInShapesIdScreen';//
import MemoryAidScreen from './src/screens/MemoryAidScreen';
import { color } from 'react-native-reanimated';
import { View } from 'react-native-animatable';

//I18nManager.allowRTL(false);

YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified.',
]);


const Stack = createStackNavigator()
 function MyStack() {
   return (
     <Stack.Navigator initialRouteName="Home" screenOptions= {{title: 'דף הבית', headerStyle:
     {backgroundColor: 'pink', height: 30},headerTintColor: 'black', headerTitleAlign: "center",
    headerTitleStyle:{fontWeight: 'bold' },}}>
       <Stack.Screen name="Home" component={HomeScreen} options={{title: 'דף הבית'}}/>
       <Stack.Screen name="Intro" component={IntroScreen} options={{title: 'מבוא'}}/>
       <Stack.Screen name="LearningDigitsMenu" component={LearningDigitsMenuScreen}options={{title: 'תפריט לימוד ספרות'}} />
       <Stack.Screen name="IdentifyDigits" component={DigitsIdScreen} options={{title: 'זיהוי ספרות'}}/>
       <Stack.Screen name="AddingTwins" component={AddingTwinsScreen} options={{title: 'חיבור תאומים'}}/>
       <Stack.Screen name="AddingNumbers" component={AddingNumbersScreen} options={{title: 'חיבור מספרים'}}/>
       <Stack.Screen name="AppInfo" component={AppInfoScreen} options={{title: 'מידע'}}/>
       <Stack.Screen name="CirclesLinesId" component={CirclesLinesIdScreen} options={{title: 'זיהוי קוויפ ועיגולים'}}/>
       <Stack.Screen name="LearningDigits" component={LearningDigitsScreen} options={{title: 'לימוד ספרות'}} />
       <Stack.Screen name="CirclesLinesInShapesId" component={CirclesLinesInShapesIdScreen} options={{title: 'זיהוי עיגולים וקווים מתוך צורות'}}/>
       <Stack.Screen name="MemoryAid" component={MemoryAidScreen} options={{title: 'תומכי זיכרון'}} />
     </Stack.Navigator>
   );
 }
const styles = StyleSheet.create({
});

 export default function App() {
   return (
     <NavigationContainer>
       <MyStack />
     </NavigationContainer>
   );
 }
 

// import { createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import HomeScreen from "./src/menus/HomeScreen";
// import IntroScreen from './src/menus/IntroScreen';
// import LearningDigitsMenuScreen from './src/menus/LearningDigitsMenuScreen';
// import IdentifyDigitsScreen from './src/menus/IdentifyDigitsScreen';
// import AddingTwinsScreen from './src/menus/AddingTwinsScreen';
// import AddingNumbersScreen from './src/menus/AddingNumbersScreen';
// import AppInfoScreen from './src/menus/AppInfoScreen';
// import CirclesLinesIdScreen from './src/screens/CirclesLinesIdScreen';//
// import LearningDigitsScreen from './src/screens/LearningDigitsScreen';
// import CirclesLinesInShapesIdScreen from './src/screens/CirclesLinesInShapesIdScreen';//
// import MemoryAidScreen from './src/screens/MemoryAidScreen';//
// import { YellowBox } from 'react-native';
// import * as React from 'react';
// import { I18nManager} from 'react-native';

// YellowBox.ignoreWarnings([
//   'Animated: `useNativeDriver` was not specified.',
// ]);
// // import BoxScreen from './src/screens/BoxScreen';




// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen, 
//     Intro: IntroScreen,
//     LearningDigitsMenu: LearningDigitsMenuScreen,
//     IdentifyDigits: IdentifyDigitsScreen,
//     AddingTwins: AddingTwinsScreen,
//     AddingNumbers: AddingNumbersScreen,
//     AppInfo: AppInfoScreen,
//     CirclesLinesId: CirclesLinesIdScreen,
//     CirclesLinesInShapesId: CirclesLinesInShapesIdScreen,
//     LearningDigits: LearningDigitsScreen,
//     MemoryAid: MemoryAidScreen
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       title: "touch points"
//     }
//   }
// );

//export default createAppContainer(navigator);
