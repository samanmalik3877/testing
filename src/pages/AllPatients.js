import React,{Component} from 'react';
import {View,Text,Image, ActivityIndicator,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import Axios from 'axios';
import {Input ,Divider} from 'react-native-elements';
//  import {Searchbar, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
class AllPatients extends Component{
    constructor(props) {
        super(props);
        this.state = {
          loading: true,
          dataSource:[], //variable 
          query:"",
          fulldata:[],
          error:null
         };
       }
    componentDidMount(){
        this.getAPI();
    }
   async getAPI(){
     
    
    let respon= await Axios.get("http://192.168.1.105/ProjectApi/api/Patient/AllPatient");


    this.fulldata=respon.data,
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
        
      /> )
        }
        renderItem=(data)=>
        <TouchableOpacity style={styles.list} onPress={()=>this.props.navigation.navigate('PateintDetails')}>
        <Text style={{fontSize:20}}>{data.item.fname+" "+data.item.lname}</Text>
        <Text style={{fontSize:20}}>{data.item.contact}</Text>
        <Text style={{fontSize:20}}>{data.item.gender}</Text>
        <View style={{flexDirection:'row'}}>
         <Text style={{justifyContent:'flex-end' ,color:'#EA2755'}}>Lab Result</Text>
         <Text style={{justifyContent:'flex-end' ,color:'#EA2755' ,paddingLeft:'6%'}}>Assign Test</Text>
         </View>
        </TouchableOpacity>
      make_api_call=()=>{

        var axios = require('axios');
            var config = {
              method: 'post',
              url: "http://192.168.1.105/ProjectApi/api/Patient/Search?fname="+this.state.search+"",
              headers: { }
              
            };
        // this.setState({loading:false,dataSource:axios.data})
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          this.dataSource=response.data
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }
        
 handleSearch=(text)=>{
   console.log("text" ,text)
  const formatedQuery=text.toLowerCase()
   const data=this.state.fulldata.filter(user=>{
        return this.contains(user,formatedQuery)
   })
   
    // const data=filter(this.state.fulldata,user=>{
    //   return this.contains(user,formatedQuery)
    // })
    this.setState({data,query:text})
 }
 contains = ({ name, contact }, query) => {
  const { fname, lname } = name
  if (fname.includes(query) || lname.includes(query) || contact.includes(query)) {
    return true
  }
  return false
}
  

render(){
    
        if(this.state.loading){
        return( 

            <View style={styles.loader}> 

            <ActivityIndicator size="large" color="default" />
            </View>
        )}
        return(
        <View style={styles.container}>
        {/* <Text style={{alignSelf:"center",marginTop:10,fontSize:20,fontWeight:'bold'}}>Axios API</Text> */}

        {/* <Searchbar round={true} placeholder="Type here" onChangeText={this.updatedSearch} value={this.state.search} 
         onIconPress={this.make_api_call()}

        ></Searchbar> */}
          <View style={{height:80 ,backgroundColor:'#EA2755' ,
          justifyContent:'center' ,paddingHorizontal:5}}>
          <View style={{height:50 ,backgroundColor:'white',flexDirection:'row' ,padding:5,alignItems:'center'}}>
         <Icon name="ios-search" style={{fontSize:24 ,color:'black'}} onPress={this.make_api_call()}/> 
             
        {/* <Image  style={{width:30, height:40}}
          			source={require('../images/search-icon.jpg')}/> */}
            <Input  style={styles.textinput} placeholder="Type Here"  
            onChangeText={this.handleSearch}
            // onChangeText={(value)=>this.searchfilter(value)}
            // onChangeText={(value)=>this.setState({search:value})} 
          ></Input>

            {/* <TextInput placeholder="Search" style={{backgroundColor:"white" ,fontSize:15 ,width:80}}/> */}
          </View>
          </View>
        
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
     },
     
     textinput:{
      width:'70%',
      marginTop:30
},
  
  });
export default AllPatients;