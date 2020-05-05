import React, { Component }  from "react";
import { View, Text, ScrollView,StatusBar } from "react-native";
import styles from '../../Pages/styles';

import PostItem from '../../Components/PostItem';
import SearchBar from '../../Components/SearchBar';

class Home extends Component {
  static navigationOptions = {
    headerTitle:<SearchBar/>,
    headerLeft:<Text style={{marginLeft:5,color:'#FFF'}} >Kamera</Text>,
    headerRight:<Text style={{marginLeft:5,color:'#FFF'}}>Mesajlar</Text>,
    headerStyle: {
      backgroundColor: '#3c5898',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <ScrollView content>
          <PostItem content={"Merhaba React Native"} />
          <PostItem content={"Merhaba React Navigation"} />
          {[1,1,1,1,1,1,1,1].map(()=><PostItem content ={"Ahmet Şerefoğlu-Durak Tekstil-Proje-Sistem"}/>)}
        </ScrollView>
      </View>
    );
  }
}

export default Home;