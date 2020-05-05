import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity,LayoutAnimation } from 'react-native';
import styles from '../styles';

export default class Animation1 extends Component {
  constructor(props){
      super(props);
      this.state = {
        big:false
      }
  }       

  _onPress(){
    LayoutAnimation.spring();
    this.setState({big:!this.state.big});
  }

  render() {
    const rectangle = {
      width:this.state.big ? 150:50,
      height:this.state.big ? 150:50
    }

    return (
      <View style={[styles.container,{alignItems:'center',justifyContent:'center'}]}>
         <TouchableOpacity activeOpacity={1} onPress={()=>this._onPress()} style={{width:50,height:50,backgroundColor:'red',borderWidth:2,borderColor:'#c00'}}> 

         </TouchableOpacity>
      </View>
    )
  }
}
