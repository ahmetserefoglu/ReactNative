import React, { Component }  from "react";
import { View, Text } from "react-native";

import styles from '../../Pages/styles';
import PostItem from '../../Components/PostItem';
import { ScrollView } from "react-native-gesture-handler";

class UserDetail extends Component {
  static navigationOptions =({navigation})=> {

    const {params} = navigation.state;

    return {
      title : params ? params.username : 'Ziyaretçi',
      headerTintColor:'#FFF',
      headerStyle: {
      backgroundColor: '#3c5898',
    },
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{ backgroundColor: '#FFF', }}>
            <View style={{ height: 200, backgroundColor: '#000' }} />
            <View style={{  alignItems: 'center', marginTop: -60 }}>
              <View style={{ borderWidth: 2, borderColor: '#fff', backgroundColor: 'blue', width: 120, height: 120, borderRadius: 10 }} />
              <Text style={{ fontSize: 18, marginTop: 5, }} >Seda Şerefoğlu</Text>
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

export default UserDetail;