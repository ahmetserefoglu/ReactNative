import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'red', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={()=>{
             this.props.navigation.openDrawer();    
        }}>
         <Text>MEnu</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

class DetailScreen extends React.Component {
  render() {
    return (
      <View style={{backgroundColor:'blue', flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
        
      </View>
    );
  }
}

const AppNavigator = createDrawerNavigator({
  Home: {screen: HomeScreen},
  Detail: {screen: DetailScreen}
});

export default createAppContainer(AppNavigator);