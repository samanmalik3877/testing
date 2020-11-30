import React,{Component} from 'react';
import {View,Text, ActivityIndicator,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Axios from 'axios';
class api_demo extends Component{
    constructor() {
        super();
        this.state = {
          loading: true,
          dataSource:[] //variable 
         };
       }
    componentDidMount(){
        this.getAPI();
    }
   async getAPI(){
     
    let respon= await Axios.get("http://192.168.0.105/myfirstdemo/api/books/allbooks");
    //let respon= await Axios.get("http://localhost/myfirstdemo/api/books/allbooks");
   // let respon= await Axios.get("http://localhost:51135/api/books/AllBooks");

   //let respon= await Axios.get("http://192.168.0.105/ProjectApi/api/Patient/AllPatient");
    this.setState({loading:false,dataSource:respon.data})
    //console.warn(respon.data);
    }
    FlatListItemSeparator = () => {
        return (
          <View style={{
             height: .9,
             width:"100%",
             backgroundColor:"rgba(0,0,0,0.5)",
        }}
        />
        )
        }
        renderItem=(data)=>
        <TouchableOpacity style={styles.list}>
        <Text style={{fontSize:20}}>{data.item.id}</Text>
        <Text style={{fontSize:20}}>{data.item.Title}</Text>
        <Text style={{fontSize:20}}>{data.item.Author}</Text></TouchableOpacity>
        
render(){
    
        if(this.state.loading){
        return( 

            <View style={styles.loader}> 

            <ActivityIndicator size="large" color="default" />
            </View>
        )}
        return(
        <View style={styles.container}>
        <Text style={{alignSelf:"center",marginTop:10,fontSize:20,fontWeight:'bold'}}>Axios API</Text>

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
      marginLeft:20,
      margin: 5,
      backgroundColor: "#fff"
     }
  });
export default api_demo;