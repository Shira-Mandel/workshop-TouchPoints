import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity} from "react-native";
import * as Animatable from 'react-native-animatable';
import { Feather } from "@expo/vector-icons";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const isMobile = windowWidth <= 812 && true;

export default class WrongCircle extends React.Component {
    handleViewRef = ref => this.view = ref;
    
    shake = () => this.view.shake(800);
    
    render() {
      return (
          <Animatable.View style={this.props.style} ref={this.handleViewRef}>
              <TouchableOpacity style={styles.button} onPress = {this.shake}>
          <Feather name="circle" size={isMobile? 100 : 200} color={'black'}/>
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