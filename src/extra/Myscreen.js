import React,{Component} from 'react';
import {TouchableOpacity ,Image,View,Text,StatusBar,TextInput ,StyleSheet} from 'react-native';


export default class Myscreeen extends Component{

   
    render(){
    return (
      <View  style={styles.container}>    
      <Image  style={{width:100, height: 100}}
          			source={require('../images/logo.png')}/>
        <Text>Name of a person,phone no etc,then search for a doctor after puting disease and if the doctor is avaliable then Appointment will fixed</Text>
        <Text style={{color:'black'}}> Today's Appointment</Text>
        <Text style={{color:'black'}}> flat list appears=name,contact,address next will open all details when click on flat list</Text>
        <Text style={{color:'black'}}> Upcoming Appointment's with day and date</Text>
         <StatusBar backgroundColor="blue" barStyle="light-content" /> 
        <TextInput style={styles.textinput} placeholder={"Enter User Name"}
        onChangeText={(value)=>this.setState({username:value})}
        ></TextInput>
        <TextInput style={styles.textinput } placeholder={"Enter Password"} 
        onChangeText={(value)=>this.setState({password:value})}
        ></TextInput>

    <View style={{marginTop:"10%" ,width:"80%"}}>
       

      </View>
     {/* <Text> {"username==>"+this.state.username}</Text>
      <Text>{"password==>"+this.state.password}</Text> */}
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


