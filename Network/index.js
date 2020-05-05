import React, { Component } from 'react'
import { View, ScrollView, Text,TouchableOpacity } from 'react-native';
import styles from '../styles';


class App extends Component {
  
  constructor(props){
     super(props);
     this.state = {movies:null};
  }       
  
  
  componentWillMount() {
    this.getMoviesFromApiAsync()       
  }

  async getMoviesFromApiAsync() {

  /*return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      this.setState({movies:responseJson.movies});
     //return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });*/
   // componenDidMount
   // componenwillMount


     try {
         let response = await fetch(
         'https://facebook.github.io/react-native/movies.json',
         );
         /*let response = await fetch('https://mywebsite.com/endpoint/', {
                  method: 'POST',
                  headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                  firstParam: 'yourValue',
                  secondParam: 'yourOtherValue',
                  }),
         });*/
         let responseJson = await response.json();
         this.setState({movies:responseJson.movies});
         //return responseJson.movies;
         } catch (error) {
         console.error(error);
      }

  
 }       

  render() {
    return (
      <View style={[styles.container,{justifycontent:'center',alignItems:'center'}]}>
         {this.state.movies && (
         <ScrollView style={{flex:1,flexDirection:'row'}}>
             {this.state.movies.map((movie) => 
             <View>
                  <Text>
                    {movie.title}
                  </Text>
                  <Text>
                    {movie.releaseYear}
                  </Text>
             </View>)}    
         </ScrollView>
         )}
      </View>
    )
  }
}



export default App;