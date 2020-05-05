import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import { withNavigation } from 'react-navigation';

class UserCartItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{flexDirection:'row',backgroundColor:'#FFF',borderColor:'#eee',padding:5}}>
          <View><View style={{marginRight:5, backgroundColor:'blue', width:58,height:58,borderRadius:5}}/></View>
          <View style={{flex:1,}}>
            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('UserDetail', { username: "Seda Şerefoğlu" })}>
                <Text style={{fontSize:15,fontWeight:'700'}}>Seda Şerefoğlu</Text>
              </TouchableOpacity> 
              <Text style={{fontSize:11,color:'#666'}}>8 Ortak Arkadaş</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{width:100,padding:4,backgroundColor:'#3b5998',borderRadius:5,}}><Text style={{textAlign:'center',fontSize:12, color:'#FFF'}}>Onayla</Text></View>
              <View style={{marginLeft:5,width:100,padding:4,borderWidth:1,borderColor:'#3b5998',borderRadius:5}}><Text style={{color:'#888',textAlign:'center',fontSize:12,color:'#000'}}>Sil</Text></View>
            </View>
          </View>
        </View>
    )
  }
}

export default withNavigation(UserCartItem);