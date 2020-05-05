import React, { Component } from 'react';
import { View, Text } from "react-native";


class SearchBar extends Component {
  render() {
    return (
      <View style={{flexDirection:'row'}}>
         <View style={{alignItems:'center', backgroundColor:'#29487d', flex:1,height:30,padding:5,borderRadius:15}}>
            <Text style={{color:'#ccc',marginLeft:10,textAlign:'center'}} >Ara</Text>
         </View>      
      </View>
    )
  }
}

export default SearchBar;