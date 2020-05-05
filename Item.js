import React, { Component } from 'react'
import { View, Text, TouchableOpacity, LayoutAnimation,Animated } from 'react-native';
import styles from './styles';

import {observer} from 'mobx-react';
import TodoStore from './todoStore';

class Item extends Component {
  constructor(props){
    super(props);
    this.state = {detail: false}
    this.loadAnim = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.timing(this.loadAnim,{
      toValue:1,
      duration:800,
      useNativeDriver:true,
      delay:this.props.index*100
    }).start();
  }
  _onPress() {
    LayoutAnimation.spring();
    this.setState({ detail: !this.state.detail });
  }
  
  render() {
    let load = this.loadAnim.interpolate({
      inputRange:[0,1],
      outputRange:[50,0],
    })

    return (
      <TouchableOpacity onPress={() => this._onPress()} style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
        <View style={{position:'absolute',flexDirection:'row',alignItems:'center',justifyContent:'space-around',width:250,left:this.state.detail ? 0 : -250,}}>
          <TouchableOpacity onPress={()=>{
            TodoStore.updateCheck(this.props.index,true)
          }} style={{marginLeft:10,width:30,height:30,borderRadius:15,backgroundColor:'green'}}/>
          <TouchableOpacity onPress={() => {
            TodoStore.updateCheck(this.props.index, false)
          }} style={{marginLeft:10,width:30,height:30,borderRadius:15,backgroundColor:'red'}}/>
          <TouchableOpacity onPress={() => {
            TodoStore.removeData(this.props.index)
          }} style={{marginLeft:10,width:30,height:30,borderRadius:15,backgroundColor:'#666'}}/>
        </View>
        <Animated.View 
          style={[styles.itemBox, { flex: 1, left: this.state.detail ? 250 : 0 },{transform:[{translateY:load}]}]} >
          <Text style={[styles.itemTitle, this.props.check && styles.itemTitleTrue,]}>
            {this.props.title}
          </Text>
          <View style={this.props.check ? styles.itemCheckTrue : styles.itemCheckFalse } shadowColor={'#000'} elevation={1} shadowOffset={{width:0,height:0}} />
        </Animated.View>
      </TouchableOpacity>
    )
  }
}

Item.defaulProps = {
  check:false,
}

export default Item;