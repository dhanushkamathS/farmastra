import 'react-native-gesture-handler';

import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import Auth from './screens/Auth';
import Tabs from './navigation/Tab';
import Homeroute from './navigation/Homeroute';
import AuthNav from './navigation/AuthNav';


const App = () => {
  return (
    <NavigationContainer>
      <AuthNav/>
    </NavigationContainer>
  )
}

export default App
