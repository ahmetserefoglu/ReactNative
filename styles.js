import {  StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
         flex: 1,
         backgroundColor: '#f9f9f9',
},
header:{
         paddingTop:10,
         height:64,
         backgroundColor:'#FFF',
         alignItems:'center',
         justifyContent:'center',
         marginBottom:5,
},
headerText:{
         fontSize:17,
         fontWeight:'bold',
},
itemBox:{
         flexDirection:'row',
         margin: 5,
         marginLeft:8,
         marginRight:8,
         backgroundColor:'#FFF',
         borderRadius:20,
         padding:12,
         borderWidth:1,
         alignItems:'center',
         justifyContent:'center',
         shadowColor:'#000',
         elevation:1,
         shadowOffset:{ width: 0, height: 0 },
         shadowOpacity:0.1


},
itemTitle:{
         flex:1,
         color:'#000',
         fontSize:14,
},
itemCheckTrue:{
         flex:0,
         width:20,
         height:20,
         borderRadius:10,
         backgroundColor:'green'
},
itemCheckFalse:{
         flex:0,
         width:20,
         height:20,
         borderRadius:10,
         backgroundColor:'red'
},
itemTitleTrue:{
         color:'#ccc',
         textDecorationLine:'line-through',
},
itemContainer:{
         flex:1,
},
createButton:{
         alignSelf:'center',
         backgroundColor:'#06f',
         width:50,
         height:50,
         alignItems:'center',
         justifyContent:'center',
         borderRadius:25,
         marginBottom:0,

},
createButtonText:{
         color:'#FFF',
         fontSize:50,
},
/*ButtonContainer:{
         alignItems:'center',
         justifyContent:'center',

}*/
         
});