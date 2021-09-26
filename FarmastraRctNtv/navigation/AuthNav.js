import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import Splash from "../screens/Splash";
import Auth from "../screens/Auth";
import Register from "../screens/Register";
import Tabs from "./Tab";
// import ModalPicker from "../Assets/components/ModalPicker";

const AuthNav = () => {
    return(
       <Stack.Navigator initialRouteName="Auth" headerMode="none">
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="Auth" component={Auth}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="Tabs" component={Tabs}/>
        {/* <Stack.Screen name="ModalPicker" component={ModalPicker}/> */}
      </Stack.Navigator>
     )
}

export default AuthNav