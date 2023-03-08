import React from 'react';

// import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './DrawerScreens/HomeScreen';
import SideMenu from './components/SideMenu';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const HomeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

// const settingScreenStack = ({navigation}) => {
//   return (
//     <Stack.Navigator
//       initialRouteName="SettingsScreen"
//       screenOptions={{
//         headerLeft: () => (
//           <NavigationDrawerHeader navigationProps={navigation} />
//         ),
//         headerStyle: {
//           backgroundColor: '#307ecc', //Set Header color
//         },
//         headerTintColor: '#fff', //Set Header text color
//         headerTitleStyle: {
//           fontWeight: 'bold', //Set Header text style
//         },
//       }}>
//       <Stack.Screen
//         name="SettingsScreen"
//         component={SettingsScreen}
//         options={{
//           title: 'Settings', //Set Header Title
//         }}
//       />
//     </Stack.Navigator>
//   );
// };

const NavigatorRoutes = (props) => {
  return (
    <Stack.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={SideMenu}>
      <Stack.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}
        component={HomeScreenStack}
      />
      {/* <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      /> */}
    </Stack.Navigator>
  );
};

export default NavigatorRoutes;