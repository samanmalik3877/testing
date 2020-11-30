import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

const Homestack=createStackNavigator();
const Detailsstack=createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen=({navigation})=>(
 <Homestack.Navigator screenOptions={{
     headerStyle:{
         backgroundColor:'#EA2755',
     },
     headerTintColor:'#fff',
     headerTitleStyle:{
        fontWeight:'bold'
 }
 }}>
<Homestack.Screen name="SignUp" component={SignUp} options={{title:'Welcome' ,
headerLeft:()=>(
    <Icon.Button name="ios-menu" size={25}
    background="#EA2755" onPress={()=>navigation.openDrawer()}>
    </Icon.Button>
)
}}>
</Homestack.Screen>
</Homestack.Navigator>
);


const DetailsStackScreen=({navigation})=>(
    <Detailsstack.Navigator screenOptions={{
        headerStyle:{
            backgroundColor:'#EA2755',
        },
        headerTintColor:'#fff',
        headerTitleStyle:{
           fontWeight:'bold'
        }
    }}>
   <Detailsstack.Screen name="Login" component={Login} options={{headerShown:false}}>
   </Detailsstack.Screen>
  </Detailsstack.Navigator>
);

export default function App(){
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen name="Login" component={DetailsStackScreen} />
        <Drawer.Screen name="SignUp" component={HomeStackScreen}  />
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}