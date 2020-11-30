import React from "react";
import { ScrollView, View, StyleSheet, StatusBar, Text, TextInput, Image, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-community/picker";
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from 'react-native-elements';
// import Searchbar from 'react-native-paper';
import PateintDetails from '../pages/PatientDetail';
import moment from 'moment';


export default class SignUp extends React.Component {
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

          <Image style={{ width: 120, height:120, justifyContent: 'center', alignSelf: 'center', borderRadius: 40 }}
            source={require('../images/logo.png')} />

          <Divider style={{backgroundColor:'red'}}></Divider>

          <View style={{ marginTop: '1%' }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#EA2755" }}>Corporation Details:</Text>
            <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '1%' }} placeholder="Corporation Name"
              onChangeText={(value) => this.setState({ lname: value })}
            ></TextInput>
            <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '1%' }} placeholder={"Owner Name"}
              onChangeText={(value) => this.setState({ lname: value })}
            ></TextInput>
            <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '1%' }} placeholder={"Address"}
              onChangeText={(value) => this.setState({ lname: value })}
            ></TextInput>
          </View>
          <View style={{ marginTop: "1%" }} >
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#EA2755" }}>Select Type:</Text>
            <Picker placeholder="Select Type-" selectedValue={this.state.picked} onValueChange={this.picker_use}>
              <Picker.Item label="Hospital" value="Hosiptal"></Picker.Item>
              <Picker.Item label="Clinic" value="Clinic"></Picker.Item>
              <Picker.Item label="Lab" value="Lab"></Picker.Item>
            </Picker>
            <Divider style={{ backgroundColor: '#EA2755', width: '100%', marginTop: '1%' }}></Divider>
          </View>
          <Text style={{ fontWeight: 'bold', fontSize: 18, color: "#EA2755", marginTop: '1%' }}>Login Details:</Text>
          <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '1%' }} placeholder={"Type Email"} ></TextInput>
          <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '1%' }} placeholder={"Password"} ></TextInput>
          <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18, marginTop: '1%' }} placeholder={"Confirm Password"} ></TextInput>
          <View style={{ marginTop: "20%", width: "95%" ,justifyContent:'center' ,alignSelf:'center' }}>
          <TouchableOpacity style={styles.btncontainer}
            onPress={()=>this.props.navigation.navigate('SignUp')}
            >
            <Text style={{ color: "white", fontSize: 18 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
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
    bottom: 10,
    backgroundColor: "#EA2755",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    alignSelf: 'center'
  },

});



{/* <Picker placeholder={{
              label:"Select gender-",
              value:null
            }}
            onValueChange={(value)=>{
              this.setState({
                checked:value
              })
            }}
          >
              <Picker.Item labal="Male" value="Male"/>
              <Picker.Item label="Female" value="Female"/>

            </Picker> */}
{/* <RNPickerSelect 
            placeholder={{
              label:'Select gender-',
              value:null
            }}
            
            // onValueChange={(value) => console.log(value)}
            onValueChange={(value)=>{
              this.setState({
                checked:value
              })

             
             
            }
          }
           
            items={[
                { label: 'Male', value: 'Male' },
                { label: 'Female', value: 'Female' },
            ]}
        /> */}



// const Register_patient = () => {


//   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const showDatePicker = () => {
//     setDatePickerVisibility(true);
//   };

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (datetime) => {
//     console.warn("A date has been picked: ", datetime);

//     hideDatePicker();
//   };


//   return (
//     <View style={styles.container}>
//      <StatusBar backgroundColor="#EA2755" barStyle="light-content" /> 

//         <TextInput style={styles.textinput} placeholder={"First Name"}
//       // onChangeText={(value)=>this.setState({username:value})}
//         ></TextInput>
//         <TextInput style={styles.textinput } placeholder={"Last Name"} 
//          //onChangeText={(value)=>this.setState({password:value})}
//         ></TextInput>
//         {/* <TextInput style={styles.textinput }> {()=>this.setdate} </TextInput> */}
//        <View style={{paddingLeft:'10%' ,alignContent:'center'}}>
        // <RNPickerSelect style={{paddingLeft:'10%' ,alignContent:'center'}}
        //     onValueChange={(value) => console.log(value)}
        //     items={[
        //         { label: 'Male', value: 'M' },
        //         { label: 'Female', value: 'F' },
        //     ]}
        // />
//      </View>
//       <Button title="DOB"  onPress={showDatePicker} />
//        <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//       />
//       <TextInput style={styles.textinput } placeholder={"Contact"} ></TextInput>
//       <TouchableOpacity style={styles.btncontainer} >
//             <Text style={{color:"white"}}>
//                     Submit
//             </Text>
//         </TouchableOpacity>

//     </View>
//   );
// };

//export default Register_patient;