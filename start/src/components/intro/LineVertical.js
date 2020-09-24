import React,{useState} from "react";
import { Dimensions,Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import { IconButton } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import normalize from "react-native-normalize";
import * as Animatable from 'react-native-animatable';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

export default class LineVertical extends React.Component {
  handleViewRef = ref => this.view = ref;
  
  shake = () => this.view.shake(800).then(endState => console.log(endState.finished ? 'bounce finished' : 'bounce cancelled'));
  
  render() {
    return (
        <Animatable.View style={this.props.style} ref={this.handleViewRef}>
            <TouchableOpacity onPress = {this.shake}>
          <Ionicons name="md-remove" size={isMobile? 150 : 250} color={'black'} style={{transform: [{rotate: '90deg'}]}}/>
    </TouchableOpacity>
      </Animatable.View>
    );
  }
}

const styles = StyleSheet.create({
    button: {
        height: '100%',
        width: '100%'
    }
});