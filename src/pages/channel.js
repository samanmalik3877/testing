import React, { useState } from "react";
import { ScrollView,Image, View,StyleSheet ,StatusBar,Text,TextInput,TouchableOpacity} from "react-native";
import {Input ,Divider} from 'react-native-elements';
import {Picker} from "@react-native-community/picker";



export default class PatientDetail extends React.Component{
 constructor(){
   super()
   this.state={

   }
 }

 render(){
   return(
     <View style={styles.container}>
       <ScrollView>
      <StatusBar backgroundColor="#EA2755" barStyle="light-content" /> 
      <Input placeholder="Type Channel Name"></Input>
       <Text style={styles.text}>Source</Text>
       <Divider style={{ backgroundColor: '#EA2755' ,marginTop:'2%' }}></Divider>

       <TextInput style={styles.TextInput} placeholder="Type Source Name"></TextInput>
       <TextInput style={styles.TextInput} placeholder="Type Source Email"></TextInput>

       <Divider style={{ backgroundColor: '#EA2755' ,marginTop:'1%' }}></Divider>
       <Text style={styles.text}>Destination</Text>
       <Divider style={{ backgroundColor: '#EA2755' ,marginTop:'1%' }}></Divider>

       <TextInput style={styles.TextInput} placeholder="Type Destination Name"></TextInput>
       <TextInput style={styles.TextInput} placeholder="Type Destination Email"></TextInput>
       <Divider style={{ backgroundColor: '#EA2755' ,marginTop:'1%' }}></Divider>
       <Text style={styles.text}>Channel Type</Text>
       <Picker placeholder="Select Channel Type">
      <Picker.Item label="Inbound" value="Inbound"></Picker.Item>
      <Picker.Item label="Outbound" value="Outbound"></Picker.Item>
     </Picker>
     <Text style={styles.text}>Select Event </Text>
         <View >
      <Picker placeholder="Select Type-">
      <Picker.Item label="Request for Lab" value="Request for Lab"></Picker.Item>
      <Picker.Item label="Lab Order" value="Lab Order"></Picker.Item>
     </Picker>
     
      </View>
      <TouchableOpacity style={styles.btncontainer} onPress={() => this.props.navigation.navigate('Delimeter')}>
        <Text style={{color:'white' ,fontSize:15}}>Create Grammer</Text>
      </TouchableOpacity>
      </ScrollView>
     {/* <TouchableOpacity style={styles.btncontainer}>
                <Text style={{color: 'white'}}>Next</Text>
            </TouchableOpacity> */}
 </View>
     
   );
 }

}
const styles = StyleSheet.create({
    container: {
     flex:1,
      width:"90%",
      marginTop:"3%",
      // justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      // alignItems:"center",
      
    },
    text: {
      fontWeight:'bold' ,
      fontSize:15, 
      color:"#EA2755" ,
      marginTop:'3%',
      paddingLeft:'2%'
    },
    label: {
      fontSize:18, 
      color:"#EA2755" ,
    },
    textinput:{
            width:'90%',
            borderBottomWidth:1,
            height:20,
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
      width:'100%',
      marginTop:'6%',
      bottom:0,
      backgroundColor:"#EA2755",
      justifyContent:'center',
      alignItems:'center',
      borderWidth:1,
      borderRadius:40,
      alignSelf:'center',
    
    },
   
  });
