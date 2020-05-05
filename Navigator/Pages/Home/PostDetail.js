import React, { Component }  from "react";
import { View, Text, ScrollView,StatusBar } from "react-native";
import styles from '../../Pages/styles';

import PostItem from '../../Components/PostItem';
import SearchBar from '../../Components/SearchBar';

class PostDetail extends Component {
 
  static navigationOptions = {
    headerTitle:<SearchBar/>,
    headerTintColor:'#FFF',
    headerStyle: {
      backgroundColor: '#3c5898',
    },
  };

  constructor(props){
         super(props);
  }       
  render() {
    return (
      <View style={styles.container}>
         <PostItem content={this.props.navigation.state.params.content}/>
      </View>
    );
  }
}

export default PostDetail;