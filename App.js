/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { View, Text,ActivityIndicator, FlatList ,TextInput ,Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import Header from './Header';
import Item from './Item';

import {observer} from 'mobx-react';
import TodoStore from './todoStore';

const data = [
  { title:'Create new Project 1',check:true},
  { title: 'Create new Project 2',  },
  { title: 'Create new Project 3', check: true },
  { title: 'Create new Project 4',  },
  { title: 'Create new Project 5', check: true },
  { title: 'Create new Project 6',  },
  { title: 'Create new Project 7', check: true },
]

@observer
export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {text:''
    ,todos:[]
    }

    //this.updateCheck = this.updateCheck.bind(this);
  }

  componentWillMount() {
    TodoStore.fetchAll();
  }
  
  /*updateCheck(index,check){
    const {todos} = this.state;
    todos[index].check = check;
    this.setState({todos});
  }*/

  /*removeData(index){
    const {todos} = this.state;
    const newTodos = todos.filter((v,i)=>index!==i);
    /*const newTodos = todos.filter((v, i) => {
      if (index === i) { return false }
      else { return true; }
    });*/

  /*  this.setState({todos:newTodos});
  }*/

  render() {
    return (
      <View style={styles.container}>
          <Header title={"All Tasks"}/>
          
          <TextInput 
            placeholder={"Durum Giriniz...."}
            value={this.state.text} onChangeText={(text)=>{
            this.setState({text});
          }} style={{borderBottomWidth:1,borderColor:'#eee' , marginTop:-5,marginBottom:5,height:40,borderWidth:1,backgroundColor:'#FFF',padding:8}} />

          <View style={styles.itemContainer}>
          {TodoStore.todos ? (<FlatList
          keyExtractor = {(item,index)=>index}
            data={TodoStore.allTodos}
            renderItem={({item,index})=> 
              <Item index={index} title={item.title} check={item.check}/>}
          />):<ActivityIndicator/>}

          </View>
          <Image
          //style={{width: 50, height: 50}}
          //source={require('./img/favicon.png')}
          />
          <TouchableOpacity onPress={()=>{
                TodoStore.addTodo(this.state.text);
                this.setState({text:''});
              }} style={styles.createButton}>
              <Text style={styles.createButtonText}>
                +
              </Text>
          </TouchableOpacity>
      </View>
    );
  }
}


