import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Accordian from './Accordion_exp';
import { Colors } from './Colors';

export default class Accor extends Component {

  constructor(props) {
    super(props);
    this.state = {
    dataSource:[],
      menu: [
        {
          title: 'MSH',
          data: [
            { key: 'MSH-1', value: false },
            { key: 'MSH-2', value: false },
            { key: 'MSh-3', value: false },
          ],
        },
        {
          title: 'PID',
          data: [   
            {key:'PID',  value:false},
            {key:'First Name', value:false},
            {key:'Last Name', value:false},
            {key:'Contact', value:false},
            {key:'Abc', value:false},

          ],
        },
        { 
         title: 'OBR',
         data: [
           {key:'Set ID', value:false},
           {key:'Requested Date and Time', value:false},
           {key:'Observation Date', value:false},
           {key:'Result Status', value:false},
           {key:'Result Order', value:false}
          ],

        },

      
      ]
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.make_api_call()}
        { this.renderAccordians()}
      </View>
    );
  }
  make_api_call=()=>{

    var axios = require('axios');
        var config = {
          method: 'post',
          url: "http://192.168.0.108/ProjectApi/api/Patient/Search?fname=saman",
          headers: { }
          
        };
    // this.setState({loading:false,dataSource:axios.data})
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      this.dataSource=response.data
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }

  renderAccordians = () => {
    const items = [];
    for (item of this.state.menu) {
      items.push(
        <Accordian
          title={item.title}
          data={item.data}
        />
      );
    }
    return items;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#FFFFFF',

  }
});