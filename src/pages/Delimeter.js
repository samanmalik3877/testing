import React from "react";
import { ScrollView, View, StyleSheet, StatusBar, Text, TextInput, Image, TouchableOpacity } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-community/picker";
import Feather from 'react-native-vector-icons/Feather';
import { Divider } from 'react-native-elements';
// import Searchbar from 'react-native-paper';
import PateintDetails from '../pages/PatientDetail';
import moment from 'moment';
import variable from './Receptionist';
import { useLinkProps } from "@react-navigation/native";


export default class Delimeter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isVisible: false,
            chosenDate: '',
            checked: '',
            search: 'first',
            picked: '',
            field:'',
            comp:"",
            sub_comp:"",
            field_rep:"",
            escape_chr:""


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

    // making_api_call = () => {

    //     var axios = require('axios');
    //     var data = JSON.stringify({ "fname": this.state.fname, "lname": this.state.lname, "address": this.state.chosenDate });

    //     var config = {
    //         method: 'post',
    //         url: 'http://192.168.0.103/ProjectApi/api/Patient/Registerpatient',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         data: data
    //     };

    //     axios(config)
    //         .then(function (response) {
    //             console.log(JSON.stringify(response.data));
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <StatusBar backgroundColor="#EA2755" barStyle="light-content" />

                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: "#EA2755" }  }>Message Encoding Characters</Text>

                                       
                    <View style={{ marginTop: '5%' }}>

                        <Text style={{ fontSize: 18, marginTop: '2%', color: "#EA2755" }}>Field Seprator</Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 15 }} 
                         onChangeText={(value)=>this.setState({field : value})}
                        placeholder="maximum length should be 1"
                        ></TextInput>
                        <Text style={{ fontSize: 18, marginTop: '4%', color: "#EA2755" }}>Component Seprator</Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 15}}
                        onChangeText={(value)=>this.setState({comp : value})}
                        placeholder="maximum length should be 1"
                        ></TextInput>

                        <Text style={{ fontSize: 18, marginTop: '4%', color: "#EA2755" }}>Sub-component separator</Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 15}} 
                        placeholder="maximum length should be 1"
                        onChangeText={(value)=>this.setState({sub_comp : value})}
                        ></TextInput>
                        <Text style={{ fontSize: 18, marginTop: '4%', color: "#EA2755" }}>Field repeat separator</Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 15}}
                        onChangeText={(value)=>this.setState({field_rep : value})}
                        placeholder="maximum length should be 1"
                        ></TextInput>
                        <Text style={{ fontSize: 18, marginTop: '4%', color: "#EA2755" }}>Escape character</Text>
                        <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 15}} 
                        placeholder="maximum length should be 1"
                        onChangeText={(value)=>this.setState({escape_chr : value})}
                        ></TextInput>

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
        bottom: 5,
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