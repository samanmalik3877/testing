import React from 'react';
import {CheckBox ,Divider } from 'react-native-elements';
// import all the components we are going to use
import {StatusBar,Text, View,StyleSheet,ScrollView} from 'react-native';
import {Picker} from "@react-native-community/picker";

//import library for the TreeView
import TreeView from 'react-native-final-tree-view';

//Dummy data for the Tree View
const state_MSH={
  MSH:[
    {
      id:'MSH',
      name:'MSH',
      children:[
        {
            id:'MSH.1',
            name:'MSH.1--Field Sperator',
        },
      {
          id:'MSH.2',
          name:'MSH.1--Encoding Characters'
      },
      {
        id:"MSH.3",
        name:'MSH.3--Sending Application',
      },
      {
        id:"MSH.4",
        name:'MSH.4--Receving Application',
      },
      
      ]
    },
    {
        id:'Patient',
        name:'Patient',
        children:[
          {
            id:'PID',
            name:'PID',
            children:[
              {
                  id:'PID.1',
                  name:'PID.1-Set ID'
              },
              {
                 id:'PID.2',
                 name:'PID.2--Patient Name'
              }
              ,
              {
                 id:'PID.3',
                 name:'PID.3--Date of Birth'
              },
              {
                 id:'PID.4',
                 name:'PID.2--Gender'
              }
            ]
          },
         
         
        ]
    },
    {
      id:'Orders',
      name:'Orders',
      children:[
        {
          id:'OBR',
          name:'OBR',
          children:[
            {
              id:'OBR.1',
              name:'OBR.1--Set ID'
            },
            {
              id:'OBR.2',
              name:'OBR.2--Requested Date/Time'
          },
          {
            id:'OBR.3',
            name:'OBR.3--Oberservation Date Time'
        },
        {
          id:'OBR.4',
           name:'OBR.4--Result Status'
        },
        {
          id:'OBR.5',
           name:'OBR.5--Result Result'
        },
          ]
          
        }, 
        {
          id:'DGI',
          name:'DGI',
          children:[
            {
               id:'DGI.1',
               name:'OBR.1--Set ID'
            },
            {
                id:'DGI.2',
                name:'OBR.2--Requested Date/Time'
            },
            {
                id:'DGI.3',
                name:'OBR.3--Oberservation Date Time'
            },
            {
              id:'DGI.4',
               name:'OBR.4--Result Status'
            },
            {
              id:'DGI.5',
               name:'OBR.5--Result Result'
            }
          ]
        },
        
        
      ]
    },
    {
      id:'EVN',
      name:'EVN',
      children:[
        {
          id:"EVN.1",
          name:"EVN.1--Type",
        },{
          id:"EVN.2",
          name:"EVN.2--Date/Time"
        },
        {
          id:"EVN.3",
          name:"EVN.3--Name"
        }
      ]
   }
      
  ]
}

const getIndicator = (isExpanded, hasChildrenNodes) => {
  if (!hasChildrenNodes) {
    return '*';
  } else if (isExpanded) {
    return '-';
  } else {
    return '+';
  }
};

const CheckBoxtreeExample= () => {
  return (
       <View style={styles.container}>
         <ScrollView style={styles.scrollView}>
      <StatusBar backgroundColor="#EA2755" barStyle="light-content" /> 
      <View >
      <Picker>
      <Picker.Item label="Request for Lab" value="Request for Lab"></Picker.Item>
      <Picker.Item label="Lab Order" value="Lab Order"></Picker.Item>
     </Picker>
      </View>
       <Divider style={{ backgroundColor: '#EA2755' ,marginTop:'3%' }}></Divider>
      <View >
      <TreeView 
          data={state_MSH.MSH}
          renderNode={
            ({
              node,
              level,
              isExpanded,
              hasChildrenNodes
            }) => {
            return (
              <View style={{flexDirection:'row' ,width:70}}>
                <Text 
                  style={{
                  
                    marginLeft: 25 * level,
                    fontSize:15,
     
                  }}
                  >
                  
                  {getIndicator(isExpanded, hasChildrenNodes)}  
                  <View style={styles.checkbox} >
                  <CheckBox 
                   title={node.name}
                  ></CheckBox>
                  </View>
                   
                                
                </Text>
              </View>
            );
          }}
        />
        
      </View>
      </ScrollView>
      </View>
  );
};

export default CheckBoxtreeExample;
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
    height:20,
    width:197,


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
  scrollView: {
    marginHorizontal: 20,
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