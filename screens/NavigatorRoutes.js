import React from 'react';
import {TouchableOpacity, Image} from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import HomeScreen from './DrawerScreens/HomeScreen';
import SideMenu from './components/SideMenu';
import ProfileScreen from './DrawerScreens/ProfileScreen';
import Logout from './Logout';
import NavigationDrawerHeader from './components/NavigationDrawerHeader';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const HomeScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerRight: () => (
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
      <Stack.Screen
        name="ProfilesScreen"
        component={ProfileScreen}
        options={{
          title: 'Profile', //Set Header Title
          headerTitleAlign: 'center', 
        }}
      />
            <Stack.Screen
        name="Logout"
        component={Logout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const ProfileScreenStack = ({ navigation }) => {
  return (
<Stack.Navigator
  initialRouteName="ProfilesScreen"
  screenOptions={{
    headerStyle: {
      backgroundColor: '#fff', //Set Header color
    },
    headerTintColor: '#307ecc', //Set Header text color
    headerLeft: ({ onPress }) => (
      <TouchableOpacity onPress={navigation.goBack}>
        <Ionicons
          name="chevron-back-outline"
          size={30}
          color="#307ecc"
          style={{ marginLeft: 10 }}
        />
      </TouchableOpacity>
    ),
  }}>
  <Stack.Screen
    name="ProfilesScreen"
    component={ProfileScreen}
    options={{
      title: 'Profile', //Set Header Title
      headerTitleAlign: 'center', 
    }}
  />
</Stack.Navigator>

  );

};

const NavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: { marginVertical: 5, color: 'white' },
        labelStyle: {
          color: '#d8d8d8',
        },
        headerShown: false,
        drawerPosition: "right"
      }}
      drawerContent={SideMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{
          drawerLabel: 'Home Screen',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
        component={HomeScreenStack}
      />
      <Drawer.Screen
        name="ProfileScreenStack"
        options={{
          drawerLabel: 'Profile',
          drawerIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} />
          ),
          onPress: () => {
            props.navigation.navigate('ProfilesScreen');
          },
          subitems: [
            {
              label: 'My Profile',
              onPress: () => {
                props.navigation.navigate('ProfilesScreen');
              },
            },
          ],
        }}
        component={ProfileScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default NavigatorRoutes;