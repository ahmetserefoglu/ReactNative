import React, { Component }  from "react";
import { View, Text, ScrollView } from "react-native";

import styles from '../../Pages/styles';
import PostItem from '../../Components/PostItem';
import SearchBar from '../../Components/SearchBar';

class Profile extends Component {
  static navigationOptions = {
    headerTitle:<SearchBar/>,
    headerRight:<Text style={{marginLeft:5,color:'#FFF'}}>Ekle</Text>,
    headerStyle: {
      backgroundColor: '#3c5898',
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#FFF', }}>
            <View style={{ height: 200, backgroundColor: '#000' }} />
            <View style={{ alignItems: 'center', marginTop: -60 }}>
              <View style={{ backgroundColor: 'red', width: 120, height: 120, borderRadius: 10 }} />
              <Text style={{ fontSize: 18, marginTop: 5, }} >Ahmet Şerefoğlu</Text>
            </View>
          </View>
          <View>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Profile;