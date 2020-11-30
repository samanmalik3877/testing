import React from "react";
import { ScrollView, View, StyleSheet, StatusBar, Text, TextInput, Image, TouchableOpacity, Button } from "react-native";
import DateTimePicker from "react-native-modal-datetime-picker";
import { Picker } from "@react-native-community/picker";
import Icon from 'react-native-vector-icons/Ionicons';
import { Divider } from 'react-native-elements';
import PateintDetails from '../pages/PatientDetail';
import moment from 'moment';


export default class immunaization extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      isVisible_1: false,
      isVisible_2: false,
      chosenDate: '',
      chosenDate_2:'',
      chosenDate_3:'',
      picked: '',
      tab_picked: 'Capsule',
      time_picked: 'After an Hour'


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

  //tab_picked
  tab_picker_use = (tab_picked) => {
    this.setState({ tab_picked })
  };
  //time_picked
  time_picker_use = (time_picked) => {
    this.setState({ time_picked })
  };

  //1
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('HH:mm')
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
  //2
  handlePicker_2 = (datetime) => {
    this.setState({
      isVisible_2: false,
      chosenDate_2: moment(datetime).format('HH:mm')
    })
  }
  showPicker_2= () => {
    this.setState({
      isVisible_2: true
    })
  }
  hidePicker_2= () => {
    this.setState({
      isVisible_2: false,

    })
  }
  //3
  handlePicker_3 = (datetime) => {
    this.setState({
      isVisible_3: false,
      chosenDate_3: moment(datetime).format('HH:mm')
    })
  }
  showPicker_3= () => {
    this.setState({
      isVisible_3: true
    })
  }
  hidePicker_3= () => {
    this.setState({
      isVisible_3: false,

    })
  }


  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <StatusBar backgroundColor="#EA2755" barStyle="light-content" />

          <View style={{ marginTop: '2%', flex: 1, backgroundColor: 'white' }}>
            <Text style={{ color: "#EA2755", fontSize: 20 }}>Medicine Name</Text>
            <TextInput style={{ borderBottomWidth: 1, width: '100%', fontSize: 18 }}
            ></TextInput>
            <Divider backgroundColor="#EA2755"></Divider>

            <View >
              <Text style={{ color: "#EA2755", fontSize: 20 }}>Dose Type</Text>
              <Picker placeholder="Select g-" selectedValue={this.state.tab_picked} onValueChange={this.tab_picker_use}>
                <Picker.Item label="Capsule" value="Capsule"></Picker.Item>
                <Picker.Item label="Drops" value="Drops"></Picker.Item>
                <Picker.Item label="Tablet" value="Tablet"></Picker.Item>
                <Picker.Item label="Syrup" value="Syrup"></Picker.Item>
              </Picker>
              <Divider style={{ backgroundColor: '#EA2755', width: '100%', marginTop: '2%' }}></Divider>

              <Text style={{ color: "#EA2755", fontSize: 20, marginTop: "2%" }}>Dose Unit</Text>
              <Picker placeholder="Select gender-" selectedValue={this.state.picked} onValueChange={this.picker_use}>
                <Picker.Item label="mg" value="Female"></Picker.Item>
                <Picker.Item label="gm" value="Others"></Picker.Item>
                <Picker.Item label="iu" value="Others"></Picker.Item>
                <Picker.Item label="ml" value="Others"></Picker.Item>
              </Picker>
              <Divider style={{ backgroundColor: '#EA2755', width: '100%', marginTop: '2%' }}></Divider>
            </View>
          </View>



          <View style={{ flex: 1, backgroundColor: 'white', marginTop: '5%' }}>
            <Text style={{ color: "#EA2755", fontSize: 20, marginTop: "1%" }}>Dose Timming</Text>

            <Picker selectedValue={this.state.time_picked} onValueChange={this.time_picker_use}>
              <Picker.Item label="After an Hour" value="After an Hour"></Picker.Item>
              <Picker.Item label="After an Week" value="After a Week"></Picker.Item>
              <Picker.Item label="1-times a day" value="1-times a day"></Picker.Item>
              <Picker.Item label="2-times a day" value="2-times a day"></Picker.Item>
              <Picker.Item label="3-times a day" value="3-times a day"></Picker.Item>
            </Picker>
            {
              this.state.time_picked=="1-times a day" &&
                  <View style={{flexDirection:'row'}}>
                <TextInput style={{ flex: 1, width: '70%', fontSize: 18 }} placeholder={"Pick Time"} editable={false}
                >{this.state.chosenDate}</TextInput>
                <Icon style={{ color: "#EA2755" }} name="alarm-outline" size={24} onPress={this.showPicker} />
                <DateTimePicker
                  isVisible={this.state.isVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode={'time'}
                  is24Hour={false}
                ></DateTimePicker>
              </View>
            }
             {
              this.state.time_picked=="2-times a day" &&
              <View>
                    <View style={{flexDirection:'row'}}>
                <TextInput style={{ flex: 1, width: '70%', fontSize: 18 }} placeholder={"Pick Time"} editable={false}
                >{this.state.chosenDate}</TextInput>
                <Icon style={{ color: "#EA2755" }} name="alarm-outline" size={24} onPress={this.showPicker} />
                <DateTimePicker
                  isVisible={this.state.isVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode={'time'}
                  is24Hour={false}
                ></DateTimePicker>
                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput style={{ flex: 1, width: '70%', fontSize: 18 }} placeholder={"Pick Time"} editable={false}
                >{this.state.chosenDate_2}</TextInput>
                <Icon style={{ color: "#EA2755" }} name="alarm-outline" size={24} onPress={this.showPicker_2} />
                <DateTimePicker
                  isVisible={this.state.isVisible_2}
                  onConfirm={this.handlePicker_2}
                  onCancel={this.hidePicker_2}
                  mode={'time'}
                  is24Hour={false}
                ></DateTimePicker>
                </View>
              </View>
              
            }
            {
              this.state.time_picked=="3-times a day" && 
              <View>
                <View style={{flexDirection:'row'}}>
                <TextInput style={{ flex: 1, width: '70%', fontSize: 18 }} placeholder={"Pick Time"} editable={false}
                >{this.state.chosenDate}</TextInput>
                <Icon style={{ color: "#EA2755" }} name="alarm-outline" size={24} onPress={this.showPicker} />
                <DateTimePicker
                  isVisible={this.state.isVisible}
                  onConfirm={this.handlePicker}
                  onCancel={this.hidePicker}
                  mode={'time'}
                  is24Hour={false}
                ></DateTimePicker>
                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput style={{ flex: 1, width: '70%', fontSize: 18 }} placeholder={"Pick Time"} editable={false}
                >{this.state.chosenDate_2}</TextInput>
                <Icon style={{ color: "#EA2755" }} name="alarm-outline" size={24} onPress={this.showPicker_2} />
                <DateTimePicker
                  isVisible={this.state.isVisible_2}
                  onConfirm={this.handlePicker_2}
                  onCancel={this.hidePicker_2}
                  mode={'time'}
                  is24Hour={false}
                ></DateTimePicker>
                </View>
                <View style={{flexDirection:'row'}}>
                <TextInput style={{ flex: 1, width: '70%', fontSize: 18 }} placeholder={"Pick Time"} editable={false}
                >{this.state.chosenDate_3}</TextInput>
                <Icon style={{ color: "#EA2755" }} name="alarm-outline" size={24} onPress={this.showPicker_3} />
                <DateTimePicker
                  isVisible={this.state.isVisible_3}
                  onConfirm={this.handlePicker_3}
                  onCancel={this.hidePicker_3}
                  mode={'time'}
                  is24Hour={false}
                ></DateTimePicker>
                </View>
              </View>
              
            }



            <View style={{ flex: 1, backgroundColor: 'white' }}>
              <Text style={{ color: "#EA2755", fontSize: 20, marginTop: "5%" }}>Dose Quantity</Text>
              {
                this.state.tab_picked === "Capsule" &&

                <Picker>
                  <Picker.Item label="1 dose" value="1 dose"></Picker.Item>
                  <Picker.Item label="2 dose" value="2 dose"></Picker.Item>
                </Picker>
              }
              {
                this.state.tab_picked === "Syrup" &&

                <Picker>
                  <Picker.Item label="1 spoon" value="1 spoon"></Picker.Item>
                  <Picker.Item label="2  spoon" value="2 spoon"></Picker.Item>
                </Picker>
              }
            </View>
          </View>
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



