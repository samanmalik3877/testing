import React,{Component} from 'react';
import {
StyleSheet,
View,
ActivityIndicator,
FlatList,
Text,
TouchableOpacity
} from "react-native";

class api_fetch extends React.Component {
constructor() {
 super();
 this.state = {
   loading: true,
   dataSource:[],
  };
}

//fetch('url?email=a@gmail.com&password=a@gmail.com', {
//   method: 'POST'
// })
// .then((response) => response.json())
// .then((responseJson) => {
//    console.log(responseJson);
//    // this.setState({
//    //    data: responseJson
//    // })
// })
// .catch((error) => {
//    console.error(error);
// });


//https://jsonplaceholder.typicode.com/users
componentDidMount(){
fetch("http://192.168.0.105/ProjectApi/api/Patient/Login?fname=saman&password=0332-121211" ,{
  method:'POST',
  
})
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   dataSource: responseJson
})
  console.warn(this.state.dataSource)
})
.catch(error=>console.log(error)) //to catch the errors if any
}
FlatListItemSeparator = () => {
return (
  <View style={{
     height: .5,
     width:"100%",
     backgroundColor:"rgba(0,0,0,0.5)",
}}
/>
)
}
renderItem=(data)=>
// {/* <TouchableOpacity style={styles.list}>
// <Text style={styles.lightText}>{data.item.name}</Text>
// <Text style={styles.lightText}>{data.item.email}</Text>
// <Text style={styles.lightText}>{data.item.company.name}</Text></TouchableOpacity> */}
{
<TouchableOpacity style={styles.list}>
<Text style={styles.lightText}>{data.item.fname}</Text>
<Text style={styles.lightText}>{data.item.lname}</Text>
{/* <Text style={styles.lightText}>{data.item.company.name}</Text> */}
</TouchableOpacity>
}
render(){
 if(this.state.loading){
  return( 
    <View style={styles.loader}> 
      <ActivityIndicator size="large" color="#0c9"/>
    </View>
)}
return(
 <View style={styles.container}>
 <FlatList
    data= {this.state.dataSource}
    ItemSeparatorComponent = {this.FlatListItemSeparator}
    renderItem= {item=> this.renderItem(item)}
    keyExtractor= {item=>item.id.toString()}
 />
</View>
)}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
   },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
  list:{
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});
export default api_fetch;