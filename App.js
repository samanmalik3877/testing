import * as React from 'react';
import { createDrawerNavigator,DrawerContentScrollView ,DrawerItemList ,DrawerItem} from '@react-navigation/drawer';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {Image, Text ,View,ActivityIndicator} from 'react-native';
import {Divider} from 'react-native-elements';
import { AsyncStorage } from '@react-native-async-storage/async-storage';

//import Authenticationfile
import {AuthContext} from './src/components/context';
//import first screen
import Register_patient from './src/pages/Register_patient';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import Home from './src/extra/TabNavigationexample';
//step 1: import
import PateintDetails from './src/pages/PatientDetail';
import diseases from './src/pages/diseases';
import channel from './src/pages/channel';
import Events from './src/pages/Events';
import Delimeter from './src/pages/Delimeter';
import immunization from './src/pages/immunaization';
import Logging from './src/pages/Loging';

// step 2:add stack of newly screen
const Homestack=createStackNavigator();
const Detailsstack=createStackNavigator();
const register_patstack=createStackNavigator();
const AllPatientsstack=createStackNavigator();
const AllPatientDetailsstack=createStackNavigator();
const diseasesstack=createStackNavigator();
const channelstack=createStackNavigator();
const Eventsstack=createStackNavigator();
const Delimeterstack=createStackNavigator();
const Immstack=createStackNavigator();
const SignOutstack=createStackNavigator();


const Drawer = createDrawerNavigator();


//Login screen
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


//all patients screen
const AllPatientscreen=({navigation})=>(
  <AllPatientsstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 < AllPatientsstack.Screen name="AllPatients" component={AllPatients} options={{title:"Patients" ,
 headerLeft:()=>(
  <Icon.Button name="remove" size={25}
  background="#EA2755" onPress={()=>navigation.openDrawer()}>
  </Icon.Button>
),
headerRight:()=>(
<Icon.Button name="remove" size={25}
background="#EA2755" onPress={()=>navigation.navigate('Register_patient')}>
</Icon.Button>
)
}}>
 </ AllPatientsstack.Screen>
</ AllPatientsstack.Navigator>
);

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
 < register_patstack.Screen name="Register_pat" component={Register_patient}  options={{title:"Add Patient" , headerTitleAlign:'center',
headerRight: () => (
 <Icon.Button name="arrow-forward-outline"  size={25} backgroundColor="#EA2755" onPress={() => navigation.navigate("PateintDetails")}></Icon.Button>
),
headerLeft: () => (
  <Icon.Button name="menu"  size={25} backgroundColor="#EA2755"  onPress={() => navigation.openDrawer()}></Icon.Button>
 )
}} >
 </ register_patstack.Screen>
</ register_patstack.Navigator>
);

//step 3: create stack personDetail
const PatientDetailStackScreen=({navigation})=>(
  <AllPatientDetailsstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 <AllPatientDetailsstack.Screen name="PateintDetails" component={PateintDetails} options={{title:"Patient Detail" , headerTitleAlign:"center",
 headerRight: () => (
  <Icon.Button name="arrow-forward-outline" size={25} backgroundColor="#EA2755" onPress={() => navigation.navigate("diseases")}></Icon.Button>
),
headerLeft: () => (
<Icon.Button name="menu"  size={25} backgroundColor="#EA2755"  onPress={() => navigation.openDrawer()}></Icon.Button>
 )
}} >
 </ AllPatientDetailsstack.Screen>
</AllPatientDetailsstack.Navigator>
);


//signed screen
const SignStackScreen=({navigation})=>(
 <SignOutstack.Navigator screenOptions={{
     headerStyle:{
         backgroundColor:'#EA2755',
     },
     headerTintColor:'#fff',
     headerTitleStyle:{
        fontWeight:'bold'
 }
 }}>
<SignOutstack.Screen name="Logging" component={Logging} options={{headerShown:false}} >
</SignOutstack.Screen>
</SignOutstack.Navigator>
);
//signUp screen
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
<Homestack.Screen name="SignUp" component={SignUp} options={{title:'Create New Account' ,

}}>
</Homestack.Screen>
</Homestack.Navigator>
);
//Disease 
const DiseaseStackScreen=({navigation})=>(
  <diseasesstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 <diseasesstack.Screen name="diseases" component={diseases} options={{headerShown:true, title:"Required Tests",headerTitleAlign:"center",
 headerRight: () => (

  <Icon.Button name="arrow-forward-outline" size={25} backgroundColor="#EA2755" onPress={() => navigation.navigate("Delimeter")}></Icon.Button>
),
headerLeft: () => (
  <Icon.Button name="menu"  size={25} backgroundColor="#EA2755"  onPress={() => navigation.openDrawer()}></Icon.Button>
 )
}}>
 </diseasesstack.Screen>
</diseasesstack.Navigator>
);

//Grammer
//step 3: create Delimeter Stack
const DelimeterStackScreen=({navigation})=>(
  <Delimeterstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 <Delimeterstack.Screen name="Delimeter" component={Delimeter} options={{title:"Grammar Creation" ,headerTitleAlign:"center",
 headerRight: () => (
  <Icon.Button name="arrow-forward-outline" size={25} backgroundColor="#EA2755" onPress={() => navigation.navigate("Events")}></Icon.Button>
),
headerLeft: () => (
  <Icon.Button name="menu"  size={25} backgroundColor="#EA2755"  onPress={() => navigation.openDrawer()}></Icon.Button>
 )
}} >
 </Delimeterstack.Screen>
</Delimeterstack.Navigator>
);
//Events
const EventsStackScreen=({navigation})=>(
  <Eventsstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 <Eventsstack.Screen name="Events" component={Events} options={{headerShown:true, headerTitleAlign:'center',
 headerRight: () => (
  <Icon.Button name="arrow-forward-outline" size={25} backgroundColor="#EA2755" onPress={() => navigation.navigate("channel")}></Icon.Button>
),
headerLeft: () => (
  <Icon.Button name="menu"  size={25} backgroundColor="#EA2755"  onPress={() => navigation.openDrawer()}></Icon.Button>
 )

}}>
 </Eventsstack.Screen>
</Eventsstack.Navigator>
);

//Channel
const ChannelStackScreen=({navigation})=>(
  <channelstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 <channelstack.Screen name="channel" component={channel} options={{headerShown:true, title:'Create Channel', headerTitleAlign:"center",
headerRight: () => (
  <Icon.Button name="arrow-forward-outline" size={25} backgroundColor="#EA2755" onPress={() => navigation.navigate("immunization")}></Icon.Button>
),
headerLeft: () => (
  <Icon.Button name="menu"  size={25} backgroundColor="#EA2755"  onPress={() => navigation.openDrawer()}></Icon.Button>
 )
}}>
 </channelstack.Screen>
</channelstack.Navigator>
);


//Immunization
const ImmStackScreen=({navigation})=>(
  <Immstack.Navigator screenOptions={{
      headerStyle:{
          backgroundColor:'#EA2755',
      },
      headerTintColor:'#fff',
      headerTitleStyle:{
         fontWeight:'bold'
      }
  }}>
 <Immstack.Screen name="immunization" component={immunization} options={{headerShown:true, title:'Immunization', headerTitleAlign:"center",
headerRight: () => (
  <Icon.Button name="arrow-forward-outline" size={25} backgroundColor="#EA2755" ></Icon.Button>
),
headerLeft: () => (
  <Icon.Button name="menu"  size={25} backgroundColor="#EA2755"  onPress={() => navigation.openDrawer()}></Icon.Button>
 )
}}>
 </Immstack.Screen>
</Immstack.Navigator>
);


// void main
export default function App(){

  //SignOut make screen and null !==


 // Authentication
  // const [isLoading ,setIsLoading]=React.useState(true);
  // const[userToken ,setUserToken]=React.useState(null);
  const initialLoginState={
    isLoading:true,
    userName:null,
    userToken:null
  };
  const loginReducer=(prevState,action)=>{
    switch(action.type){
      //First time login
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userName:action.token,
          isLoading:false
        };
        case 'LOGIN':
        return {
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false
        };
        case 'LOGOUT':
        return {
          ...prevState,
          userName:null,
          userToken:null,
          isLoading:false
        };
        case 'REGISTER':
        return {
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading:false
        };
    }
  };
const[ loginState,dispatch]=React.useReducer(loginReducer,initialLoginState)

  const authContext=React.useMemo(()=>({
    signIn:async(userName,password)=>{
        // setUserToken('abc');
        // setIsLoading(false);
        let userToken;
        userToken=null
        if(userName=='user' && password=='pass'){  
          try {
            userToken:'abc';
            await AsyncStorage.setItem('userToken',userToken)
          } catch (e) {
            console.log(e)
          }
        }
        dispatch({type:'LOGIN' ,id:userName,token:userToken});
    },
    signOut:async()=>{
      // setUserToken(null);
      // setIsLoading(false);
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e)
        }
      
      dispatch({type:'LOGOUT'});
    },
    signUp:()=>{
      setUserToken('abc');
      setIsLoading(false);
    }
  }),[]);
 
  //Run when our screen rendering weather our user is login or not
  React.useEffect(()=>{
      setTimeout(async()=>{
        let userToken;
        userToken=null
          try {
            userToken:await AsyncStorage.getItem('userToken')
          } catch (e) {
            console.log(e)
          }
       // setIsLoading(false);
       dispatch({type:'RETRIEVE_TOKEN' ,token:'abc'});

      },1000);
  },[]);
 if(loginState.isLoading){
   return(
     <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
       <ActivityIndicator  color="#EA2755" size='large' />
     </View>
   )
 }

  return (
  <AuthContext.Provider value={AuthContext}>
    <NavigationContainer>
      {loginState.userToken == null ?(
         <Drawer.Navigator 
         drawerContentOptions={{
           activeTintColor: '#e91e63',
           itemStyle: { padding: 0 },
         }}
         drawerContent={(props) => {
           const filteredProps = {
             ...props,
             state: {
               ...props.state,
               routeNames: props.state.routeNames.filter(
                 // To hide single option
                 // (routeName) => routeName !== 'HiddenPage1',
                 // To hide multiple options you can add & condition
                 (routeName) => {
                   routeName !== 'PateintDetails' && routeName !== 'SignUp' && routeName !=='Register_patient' && routeName!=="Login"
                 }
               ),
              
               routes: props.state.routes.filter(
                 (route) =>
                   route.name !== 'PateintDetails' && route.name !== 'SignUp' && route.name!=='Register_patient' && route.name!=='Login'
               ),
             },
           };
           return (
             <DrawerContentScrollView {...filteredProps} >
               <View>
               <Image style={{ paddingLeft:10 ,width: 70, height: 70,borderRadius:50}}
                   source={require('./src/images/user.jpg')} />
                   <Divider style={{backgroundColor:'black'}}></Divider>
               </View>
               <DrawerItemList {...filteredProps} />
               {/* <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="exit-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="SignOut"
                            onPress={() => this.props.navigation.navigate('Login')}
                        /> */}
             </DrawerContentScrollView>
           );
         }}>
         <Drawer.Screen name="Home" component={Home}/>
         <Drawer.Screen name="Register_patient" component={RegsiterStackScreen}/>
         <Drawer.Screen name="PateintDetails" component={PatientDetailStackScreen}/>
         <Drawer.Screen name="SignUp" component={HomeStackScreen}/>
         <Drawer.Screen name="diseases" component={DiseaseStackScreen}/>
         <Drawer.Screen name="Delimeter" component={DelimeterStackScreen}/>
         <Drawer.Screen name="Create Channel" component={ChannelStackScreen}/>
         <Drawer.Screen name="Events" component={EventsStackScreen}/>
         <Drawer.Screen name="immunization" component={ImmStackScreen}/>
         <Drawer.Screen name="SignOut" component={SignStackScreen}/>
         
         </Drawer.Navigator> 
           
      ):
      <Drawer.Screen name="Login" component={DetailsStackScreen} />
      }

  
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

