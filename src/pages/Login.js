import React from 'react';
import { TouchableOpacity, Image, View, Text, StatusBar, TextInput, Button, StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input, input } from 'react-native-elements';
import Axios from 'axios';
import {AuthContext} from '../components/context'; 



export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      fname: "",
      contact: "",
      loading: true,
      dataSource: [] //variable 
    };
    const {signIn} =React.useContext(AuthContext);
    
  }


  //   componentDidMount(){
  //     this.getAPI();
  // }

   //username and password
  loginHandle=(username,password)=>{
  signIn(username,password)
}

  onIconPress = () => {
    //let iconName=(this.state.secureTextEntry) ? "eye-off" : "eye";
    this.setState({
      secureTextEntry: !this.state.secureTextEntry,
      //iconName:iconName
    });
  }


  validate_field = () => {
    const { username, password } = this.state
    if (username == "") {
      alert("Please fill username")
      return false
    }
    else if (password == "") {
      alert("Please type Password")
      return false
    }
    return true
  }

  making_api_call = () => {
    if (this.validate_field()) {

      var axios = require('axios');
      var data = "";
      var config = {
        method: 'post',
        url: "http://192.168.0.103/ProjectApi/api/Patient/Login?fname=" + this.state.fname + "&contact=" + this.state.contact + "",
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };
      //call  
      if (data = !null) {
        this.props.navigation.navigate("Home");
      }

      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });

    }
    else {
      alert("UnsuccessfullLogin")
    }
  }

  render() {
    return (
      <View style={styles.container}>

        <Image style={{ width: 150, height: 150, justifyContent: 'center' }}
          source={require('../images/logo.png')} />
        <StatusBar backgroundColor="#EA2755" barStyle="light-content" />

        <View style={{ width: '90%' }}>
          <Input
            placeholder="Email"
            onChangeText={(value) => this.setState({ fname: value })}
          ></Input>

          <Input
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={(value) => this.setState({ contact: value })}
          ></Input>
        </View>


        <View style={{ marginTop: "3%", width: "80%" }}>
          <TouchableOpacity style={styles.btncontainer}
            //onPress={()=>this.props.navigation.navigate('SignUp')}
            onPress={()=>{this.loginHandle(this.state.fname,this.state.contact)}}
           >
            <Text style={{ color: "white", fontSize: 18 }}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={{ color: '#EA2755', marginTop: 15 }}>Forgot password?</Text>
          </TouchableOpacity>
        </View>


        <View style={{ flexDirection: 'row', marginTop: '5%' }}>
          <Text style={{ fontSize: 15, color: '#EA2755' }} onPress={() => this.props.navigation.navigate('SignUp')}>SignUp</Text>
          <Text style={{ fontSize: 15 }}> For New Account </Text>

        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {

    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 3

  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  textinput: {
    height: 42,
    width: '80%',
    borderBottomWidth: 1,
    marginTop: "3%",

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
  btncontainer: {
    height: 50,
    width: '80%',
    backgroundColor: "#EA2755",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    alignSelf: 'center',

  }
});


