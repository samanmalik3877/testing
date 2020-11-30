import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../pages/AllPatients';
import Register_patient from '../pages/Register_patient';
import DetailsScreen from './Myscreen';
import ExploreScreen from './Myscreen';
import ProfileScreen from './Myscreen';


const Stack = createStackNavigator();

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const register_patstack=createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const HomeSt = ()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Register_patient" component={Register_patient} />
    </Stack.Navigator>
  );
}


const TabNavigationexample= () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#EA2755',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HomeSt}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default TabNavigationexample;


//register patients
//screeen of register pateint
const RegsiterStackScreen=({navigation})=>(
  <register_patstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 < register_patstack.Screen name="Register_pat" component={Register_patient} options={{title:"Add Patient" }} >
 </ register_patstack.Screen>
</ register_patstack.Navigator>
);

//Register Patient


//All Pateints
const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#EA2755',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'All Patients',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#EA2755" onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight:()=>(
        <Icon.Button name="ios-add" size={25}
        backgroundColor="#EA2755" onPress={()=>navigation.navigate('Register_patient')}>
        </Icon.Button>
        )
        }} />
</HomeStack.Navigator>
);

// //Patient detail
// const PatientdetailStackScreen = ({navigation}) => (
//   < PatientdetailStack.Navigator screenOptions={{
//           headerStyle: {
//           backgroundColor: '#1f65ff',
//           },
//           headerTintColor: '#fff',
//           headerTitleStyle: {
//           fontWeight: 'bold'
//           }
//       }}>
//           < PatientdetailStack.Screen name="PateintDetail" component={PersonDetail} 
//           />
//   </PatientdetailStack.Navigator>
//   );
const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);
  