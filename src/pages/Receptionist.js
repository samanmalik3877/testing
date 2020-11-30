import React,{Component} from 'react';
import {TouchableOpacity ,Header,Image,View,Text,StatusBar,TextInput ,StyleSheet} from 'react-native';


export default class Login extends Component{

   
    render(){
    return (
      <View  style={styles.container}>   
      <Image  style={{width:100, height: 100}}
          			source={require('../images/logo.png')}/>
        <Text>on top of header there will be plus button to where receptionist CAN add new Appointments</Text>
        <Text style={{color:'black'}}> Today's Appointment to whom with whom</Text>
        <Text style={{color:'black'}}> flat list appears=name,contact,address next will open all details when click on flat list</Text>
        <Text style={{color:'black'}}> Upcoming Appointment's with day and date</Text>
         <StatusBar backgroundColor="blue" barStyle="light-content" /> 
        <TextInput style={styles.textinput} placeholder={"Enter User Name"}
       
        ></TextInput>
        <TextInput style={styles.textinput } placeholder={"Enter Password"} 
       
        ></TextInput>

    <View style={{marginTop:"10%" ,width:"80%"}}>
        <TouchableOpacity style={styles.btncontainer}
       
        >
            <Text style={{color:"white"}}>
                    Login
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btncontainer}
      
        >
            <Text style={{color:"white"}}>
                    SignUp
            </Text>
        </TouchableOpacity>

      </View>
    
      </View>
    );
    }
  };
  
  const styles = StyleSheet.create({
    container: {
     flex:1,
      height: "100%",
      width:"100%",
      justifyContent:"center",
      alignSelf:"center",
      alignContent:"center",
      alignItems:"center",
      
    },
    text: {
      color: 'white',
      fontSize: 23,
      textAlign: 'center',
    },
    textinput:{
            height:42,
            width:'80%',
            borderBottomWidth:1,
            marginTop:"3%",
           
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
        height:42,
        width:'80%',
        backgroundColor:"blue",
         marginTop:"3%",
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderRadius:40,
        alignSelf:'center'
    }
  });


