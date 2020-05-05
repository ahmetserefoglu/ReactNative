import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity,LayoutAnimation,Animated } from 'react-native';
import styles from '../styles';

const ATouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
export default class Animation3 extends Component {
  constructor(props){
      super(props);
      this.rectangle = new Animated.Value(0);
  }       

  _onPress(){
     /*this.rectangle.setValue(
       this.rectangle._value===150 ? 50: 150  
     );*/

     Animated.timing(this.rectangle,{
         toValue:this.rectangle._value===0 ? 1: 0,
         duration : 1000,
         
     }).start()
  }

  render() {
    /*const rectangle = {
      width:this.state.big ? 150:50,
      height:this.state.big ? 150:50
    }*/
    let rotateAnim = this.rectangle.interpolate({
             inputRange : [50,150],
             outputRange: ['0deg','90deg']
    })

    let size = this.rectangle.interpolate({
             inputRange : [0,1],
             outputRange: [50,150]
    })

    let opacity = this.rectangle.interpolate({
             inputRange : [0,0.5,1],
             outputRange: [1,0,1]
    })

    return (
      <View style={[styles.container,{alignItems:'center',justifyContent:'center'}]}>
         <TouchableOpacity activeOpacity={1} onPress={() => this._onPress()}>
             <Animated.View  style={{opacity ,transform:[{rotateZ:rotateAnim}] , width: size, height: size,backgroundColor:'red',borderWidth:2,borderColor:'#c00'}}/> 
         </TouchableOpacity>
      </View>
    )
  }
}
