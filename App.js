import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Input, Icon, NativeBaseProvider, Center, HStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import Login from './screens/Login';
import Logout from './screens/Logout';
import NavigatorRoutes from './screens/NavigatorRoutes';


const Stack = createNativeStackNavigator();
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Logout"
        component={Logout}
        options={{
          title: 'Logout', //Set Header Title
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

export default function App() {
  return (  
      <NativeBaseProvider>
      <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="NavigatorRoutes"
          component={NavigatorRoutes}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
        <StatusBar style="auto" />
      </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
