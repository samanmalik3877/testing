import React from 'react';
import { View, StyleSheet, StatusBar,Image, Text, TouchableOpacity } from "react-native";
import { Divider, CheckBox } from 'react-native-elements';
//import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Events from './Events';


export default class diseases extends React.Component {
  constructor() {
    super()
    this.state = {
      isVisible: false,
      unchecked: false,
      checked: false
    }
  }

  //checkBox
  check_fun = (checked) => {
    this.setState({ checked })
  }
  render() {

    return (
      

      <View style={styles.container}>
        <View style={{flexDirection:'row'}}>

<Image  style={{width:100, height: 100 ,justifyContent:'center' ,borderRadius:40}}
          			source={require('../images/user.png')}/>
                <View style={{justifyContent:'center'}}>
                <Text style={{fontSize:18}}>Saman Asif</Text>
                <Text style={{fontSize:18}}>0330-0000000</Text>
                <Text style={{fontSize:18}}>Female</Text>
                </View>
                </View>

        <Divider style={{ backgroundColor: '#EA2755' ,marginTop:'3%' }}></Divider>

<View style={{fontSize:20,marginTop:'10%'}}>
          <CheckBox
            title='MRI'
            checked={this.state.unchecked}
            style={styles.checkbox}
          />
          <CheckBox
            title='ECG'
            checked={this.state.unchecked}
            style={styles.checkbox}
          />
          <CheckBox
            title='Sugar'
            checked={this.state.unchecked}
            style={styles.checkbox}
          />
           <CheckBox
            title='BCP'
            checked={this.state.unchecked}
            style={styles.checkbox}
          />
          <CheckBox
            title='UltraSound'
            checked={this.state.unchecked}
            style={styles.checkbox}
          />
        </View>
        <View style={{position:'absolute' ,bottom:100}}>
          <Text style={{borderStyle:'solid'}}>Total Test:</Text>
        </View>
{/* 
        <TouchableOpacity style={styles.btncontainer}>
                <Text style={{color: 'white'}}  onPress={()=>this.props.navigation.navigate('channel')} >Request for Lab</Text>
            </TouchableOpacity> */}
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
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: "center",
    backgroundColor:'#EA2755'
  },
  text: {
    color: 'blue',
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
    bottom: 20,
    backgroundColor: "#EA2755",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 40,
    fontSize:20,
    alignSelf: 'center'
  },

});