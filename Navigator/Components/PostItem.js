import React, { Component } from 'react';
import { View, Text,TouchableOpacity } from "react-native";
import {withNavigation} from 'react-navigation';

class PostItem extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <View style={{borderColor:'#ccc', borderBottomWidth:1,backgroundColor:'#fff',marginTop:10}}>
          <View style={{marginTop:5,flexDirection:'row',alignItems:'center'}}>
            <View><View style={{margin:5,backgroundColor:'red',width:35,height:35,borderRadius:35/2}}/></View>
            <View><Text style={{fontWeight:'700'}}>Ahmet Şerefoğlu</Text></View>
          </View>
          <View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('PostDetail', { content: this.props.content })}>
              <Text style={{fontSize:14,padding:8}}>{this.props.content}</Text>
          </TouchableOpacity> 
          </View>
          <View style={{flexDirection:'row',padding:10,borderTopWidth:1,borderColor:'#eee'}}>
            <View style={{flex:1}}><Text syle={{color:'#333',textAlign:'center',fontWeight:'bold'}}>Beğen</Text></View>
            <View style={{flex:1}}><Text syle={{color:'#333',textAlign:'center',fontWeight:'bold'}}>Yorum Yap</Text></View>
            <View style={{flex:1}}><Text syle={{color:'#333',textAlign:'center',fontWeight:'bold'}}>Paylaş</Text></View>
          </View>
     </View>
    )
  }
}

export default withNavigation(PostItem);