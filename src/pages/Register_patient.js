import React from "react";
import { ScrollView, View, StyleSheet, StatusBar, Text, TextInput, Image, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-community/picker";
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from 'react-native-elements';
// import Searchbar from 'react-native-paper';
import PateintDetails from '../pages/PatientDetail';
import moment from 'moment';


export default class Register_patient extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      chosenDate: '',
      checked: '',
      fname: '',
      lname: '',
      search: 'first',
      picked: ''

    }
  }

  //search
  updatedSearch = (search) => {
    this.setState({ search })
  };
  //RadioButton
  radio_button = (checked) => {
    this.setState({ checked })
  }

  //picker
  picker_use = (picked) => {
    this.setState({ picked })
  };



  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('MMM,Do YYY HH:mm')
    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  hidePicker = () => {
    this.setState({
      isVisible: false,

    })
  }

  making_api_call = () => {

    var axios = require('axios');
    var data = JSON.stringify({ "fname": this.state.fname, "lname": this.state.lname, "address": this.state.chosenDate });

    var config = {
      method: 'post',
      url: 'http://192.168.0.103/ProjectApi/api/Patient/Registerpatient',
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="#EA2755" barStyle="light-content" />

          <Image style={{ width: 80, height: 80, justifyContent: 'center', alignSelf: 'center', borderRadius: 40 }}
            source={require('../images/user.png')} />


          <View style={{ marginTop: '2%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#EA2755" }}>Personal Information:</Text>
            <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '3%' }} placeholder="First Name "
              onChangeText={(value) => this.setState({ lname: value })}
            ></TextInput>
            <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '3%' }} placeholder={"Last Name"}
              onChangeText={(value) => this.setState({ lname: value })}
            ></TextInput>
          </View>

          <View style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#000',
            paddingBottom: 0,
            marginTop: '3%'
          }}>
            <TextInput style={{ flex: 1, width: '70%', fontSize: 18 }} placeholder={"Date of Birth"}
            >{this.state.chosenDate}</TextInput>
            <Feather style={{ color: "#EA2755" }} name="calendar" size={24} onPress={this.showPicker} />
            <DateTimePicker
              isVisible={this.state.isVisible}
              onConfirm={this.handlePicker}
              onCancel={this.hidePicker}
              mode={'date'}
              is24Hour={false}
            ></DateTimePicker>
          </View>
          <View style={{ marginTop: "3%" }} >
            <Picker placeholder="Select gender-" selectedValue={this.state.picked} onValueChange={this.picker_use}>
              <Picker.Item label="Male" value="Male"></Picker.Item>
              <Picker.Item label="Female" value="Female"></Picker.Item>
              <Picker.Item label="Others" value="Others"></Picker.Item>
            </Picker>
            <Divider style={{ backgroundColor: '#EA2755', width: '100%', marginTop: '3%' }}></Divider>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#EA2755", marginTop: '3%' }}>Contact Information:</Text>
          <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '3%' }} placeholder={"Contact"} ></TextInput>
          <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '3%' }} placeholder={"Address"} ></TextInput>

          {/* <TouchableOpacity style={styles.btncontainer}
        onPress={()=> this.props.navigation.navigate("PateintDetails")}
        >
            <Text style={{color:"white"}}>
                    Register
            </Text>
        </TouchableOpacity>    */}
        </ScrollView>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    marginTop: "3%",
    // justifyContent:"center",
    alignSelf: "center",
    alignContent: "center",
    // alignItems:"center",

  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
  textinput: {
    width: '80%',
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
  btncontainer: {
    height: 50,
    width: '80%',
    position: 'absolute',
    marginTop: '5%',
    bottom: 5,
    backgroundColor: "#EA2755",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    alignSelf: 'center'
  },

});



