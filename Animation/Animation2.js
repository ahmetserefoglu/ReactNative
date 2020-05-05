import React, { Component } from 'react';
import { View, Text, ScrollView, Image, UIManager, TouchableOpacity,LayoutAnimation } from 'react-native';
import styles from '../styles';

export default class Animation2 extends Component {
  constructor(props){
      super(props);
      this.state = {
        flexDirection:'column'
      }
  }       

  componentDidMount() {
         UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);

  }
  _onPress(){
    LayoutAnimation.configureNext({
         duration : 500,
         create:{type:LayoutAnimation.Types.linear},
         update:{type:LayoutAnimation.Types.spring}
    });
    //LayoutAnimation.easeInEaseOut();
    this.setState({flexDirection : this.state.flexDirection==='row' ? 'column':'row'});
  }

  render() {
    /*const rectangle = {
      width:this.state.flexDirection ? 150:50,
      height:this.state.flexDirection ? 150:50
    }*/

    return (
      <View style={styles.container}>
         <View style={{flexDirection:this.state.flexDirection,flex:1,alignItems:'center',justifyContent:'center'}}>
               <View style={{backgroundColor:'blue',width:100,height:100}}/>
               <View style={{backgroundColor:'red',width:100,height:100}}/>   
         </View>
         <TouchableOpacity onPress={()=>this._onPress()} style={{backgroundColor:'#06f',padding:5}}> 
                  <Text style={{textAlign:'center',color:'#FFF'}}>
                      Görünümü değiştir     
                  </Text>
         </TouchableOpacity>
      </View>
    )
  }
}
