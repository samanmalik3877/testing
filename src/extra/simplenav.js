import 'react-native-gesture-handler';
import React,{Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';
import Patientdetails from '../pages/PatientDetail';

const Stack = createStackNavigator();

function simplenav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#d7d8de'
        },
      }}
      >
        <Stack.Screen name="Patientdetails"  component={Patientdetails}  options={{headerShown:false}}/> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default simplenav;


////////////////////////////////////////

