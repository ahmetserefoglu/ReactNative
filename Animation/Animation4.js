import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity,LayoutAnimation,Animated } from 'react-native';
import styles from '../styles';

export default class Animation4 extends Component {
  constructor(props){
      super(props);
      this.animatedValue = new Animated.Value(0);
  }       

  renderDetail(){
     const data = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

     return data.map(()=>
     <View style={{flexDirection:'row'}}>
         <View>
             <View style={{margin:5,width:45,height:45,borderRadius:45/2,backgroundColor:'#999'}}></View>
         </View>
         <View style={{marginLeft:5,marginRight:5,borderBottomWidth:1,borderColor:'#eee',flex:1,flexDirection:'column',justifyContent:'center'}}>
              <View><Text style={{fontWeight:'bold'}}>Ahmet Şerefoğlu</Text></View>
              <View><Text style={{fontSize:12,color:'#666'}}>Merhaba Ben React!!</Text></View>
         </View>
     </View>
     )
  }

  render() {
    
    let searchBarHeight =  this.animatedValue.interpolate({
      inputRange:[0,100],
      outputRange:[1,0],
      extrapolate:'clamp'
    })

    let searchBarOpacity =  this.animatedValue.interpolate({
      inputRange:[0,10],
      outputRange:[1,0],
      extrapolate: 'clamp'
    })

    let searchBarTranslate = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -15],
      extrapolate: 'clamp'
    })

    let bigTextTranslate = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -10],
      extrapolate: 'clamp'
    })

    let smallTextOpacity = this.animatedValue.interpolate({
      inputRange: [0, 10],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    })

    let headerTranslate = this.animatedValue.interpolate({
      inputRange: [0, 100],
      outputRange: [0, -100],
      extrapolate: 'clamp'
    })
         
    return (
      <View style={[styles.container]}>
         <View style={{zIndex:1, backgroundColor:'#eee',flexDirection:'row',height:64,padding:5,paddingBottom:0,paddingTop:20,alignItems:'center'}}>
             <View style={{flex:1}}><Text style={{textAlign:'left', color:'#06f'}}>Düzenle</Text></View>
             <Animated.View style={{opacity:smallTextOpacity,flex:1}}><Text style={{textAlign:'center', color:'#000',fontWeight:'bold',fontSize:15}}>Sohbet</Text></Animated.View>
             <View style={{flex:1}}><Text style={{textAlign:'right', color:'#06f'}}>Sil</Text></View>
         </View>
        <Animated.View style={{zIndex:0,top:64,left:0,right:0, position:'absolute',transform:[{translateY:headerTranslate}],backgroundColor:'#eee',borderBottomWidth:1,borderColor:'#ddd'}}>
              <Animated.View style={{transform:[{translateY:bigTextTranslate}]}}><Animated.Text style={{fontSize:22,fontWeight:'bold',textAlign:'left',margin:5}}>Sohbet</Animated.Text></Animated.View>
              <View>
                  <Animated.View style={{
                           transform:[{translateY:searchBarTranslate},{scaleY:searchBarHeight}], justifyContent: 'center', height: 30, backgroundColor: '#ddd', marginLeft: 5, marginRight: 5, marginBottom: 5, borderRadius: 10 }}>
                           <Animated.Text style={{opacity:searchBarOpacity, paddingLeft: 10, fontSize: 13, color: '#777' }}>
                           Ara
                           </Animated.Text>
                  </Animated.View>  
              </View>
         </Animated.View>
         <View style={{flex:1}}>
              <Animated.ScrollView
                  style={{paddingTop:80}}
                  scrollEventThrottle={1} 
                  onScroll={Animated.event(
                  [
                    {
                      nativeEvent: {
                        contentOffset: {y: this.animatedValue},
                      },
                    },
                  ],
                  {useNativeDriver: true}
                  )}
               >
                {this.renderDetail()}
              </Animated.ScrollView>
         </View>
      </View>
    )
  }
}
