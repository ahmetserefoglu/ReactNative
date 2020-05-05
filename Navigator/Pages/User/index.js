import React, { Component }  from "react";
import { View,Text ,ScrollView } from "react-native";
import styles from '../../Pages/styles';

import UserCartItem from '../../Components/UserCartItem';
import SearchBar from '../../Components/SearchBar';

class User extends Component {
  static navigationOptions = {
    headerTitle:<SearchBar/>,
    headerLeft:<Text style={{marginLeft:5,color:'#FFF'}} >Kamera</Text>,
    headerRight:<Text style={{marginLeft:5,color:'#FFF'}}>Ekle</Text>,
    headerStyle: {
      backgroundColor: '#3c5898',
    },
  };
  render() {
    return (
      <View style={styles.container }>
        <ScrollView>
          {[1, 1, 1, 1, 1, 1, 1, 1].map(() => <UserCartItem />)}
        </ScrollView>
      </View>
    );
  }
}

export default User;