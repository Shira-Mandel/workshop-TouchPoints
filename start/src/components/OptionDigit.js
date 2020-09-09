import React, {useState} from "react";
import {View,  Image, StyleSheet, Dimensions} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import * as Animatable from 'react-native-animatable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

export default class OptionDigit extends React.Component 
{
    handleViewRef = ref => this.view = ref;
    
    shake = () => {
         if (this.props.result == this.props.value) {
             this.props.setRewardState();
         }
         else {
             this.view.shake(800);
         }
     }
      
    render() {
        return (
          <Animatable.View style={styles.container} ref={this.handleViewRef}>
         <TouchableOpacity style={styles.button} onPress={this.shake} >
         <Image style={this.props.style} resizeMode="contain" source={this.props.source}/>
         </TouchableOpacity>
         </Animatable.View>
        );
    }}

    const styles = StyleSheet.create({
        container: {
            zIndex: 1, 
            borderWidth: 2, 
            height: "100%", 
            width: "11.1%",
        },
        button: {
            height: "100%", 
            width: "100%", 
            zIndex: 1
        },
        image: {
            height: "100%", 
            width: "100%", 
            zIndex: 1
        }
    });