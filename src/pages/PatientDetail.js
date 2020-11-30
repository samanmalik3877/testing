import React, { useState } from "react";
import { Image, View,StyleSheet ,StatusBar,Text,TextInput,TouchableOpacity} from "react-native";
import {Input ,Divider} from 'react-native-elements';



export default class PatientDetail extends React.Component{
 constructor(){
   super()
   this.state={

   }
 }
 render(){
   return(
     <View style={styles.container}>
         <StatusBar backgroundColor="#EA2755" barStyle="light-content" /> 
         <Text style={styles.text}>Personal Information:</Text>
         <Divider style={{backgroundColor:'#EA2755' ,width:'100%', marginTop:'3%' }}></Divider>
         <View style={{flexDirection:'row' ,marginTop:'5%'}}>
         <Image  style={{width:90, height: 90,justifyContent:'center'}}
          			source={require('../images/clinic.png')}/>
        <View>
       <Text style={styles.label}>Patient ID:</Text>
       <Text style={styles.label}>Name:</Text>
       <Text style={styles.label}>DOB:</Text>
       <Text style={styles.label}>Contact:</Text>
       </View>
      
     </View>
     <View>
       <Divider style={{backgroundColor:'#EA2755' ,width:'100%', marginTop:'3%' }}></Divider>
      <Text style={styles.text}>Hospital/Clinic Information:</Text>
      <Divider style={{backgroundColor:'#EA2755' ,width:'100%', marginTop:'3%' }}></Divider>

<View style={{flexDirection:'row',marginTop:'5%'}}>
      <Image  style={{width:90, height:90 ,justifyContent:'center'}}
          			source={require('../images/clinic.png')}/>
      <View>
      <Text style={styles.label}>Name:</Text>
       <Text style={styles.label}>Contact:</Text>
       <Text style={styles.label}>Address:</Text>
       </View>
     </View>
 <Divider style={{backgroundColor:'#EA2755' ,width:'100%', marginTop:'3%' }}></Divider>

 <View style={{marginTop:'50%'}} >
        {/* <TouchableOpacity style={styles.btncontainer}
        onPress={()=>this.props.navigation.navigate('diseases')}
        >
            <Text style={{color:"white" ,fontSize:20}}>
                    Assign Test
            </Text>
        </TouchableOpacity>   */}
        
        </View> 
        </View>
 </View>
     
   );
 }

}

const styles = StyleSheet.create({
    container: {
     flex:2,
      width:"90%",
      marginTop:"3%",
      // justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      // alignItems:"center",
      
    },
    text: {
      fontWeight:'bold' ,
      fontSize:25 , 
      color:"#EA2755" ,
      marginTop:'5%',
      paddingLeft:'2%'
    },
    label: {
      fontSize:18, 
      color:"#EA2755" ,
    },
    textinput:{
            width:'30%',
    },
    inLineDatePick: {
      paddingLeft: '18%',
      paddingRight: '18%',
      display: 'flex',
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#42A5F5',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
      },
    btncontainer:{
      height:50,
      width:'80%',
      position:'absolute',
      marginTop:'5%',
      bottom:0,
      backgroundColor:"#EA2755",
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderRadius:40,
      alignSelf:'center',
    
    },
   
  });
