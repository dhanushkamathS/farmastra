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

import Weather from "../screens/Weather";
import Soil from "/home/adithya/Desktop/shellhacks/agro2/screens/Soil"
import Motor from "/home/adithya/Desktop/shellhacks/agro2/screens/Motor"
import Fertilizers from "../screens/Fertilizers";
import Home from "../screens/Home";
import Splash from "../screens/Splash";


const Homeroute = () => {
    return(
       <Stack.Navigator initialRouteName="Home" headerMode="none">
           <Stack.Screen name="Home" component={Home}/>
           <Stack.Screen name="Weather" component={Weather}/>
           <Stack.Screen name="Soil" component={Soil}/>
           <Stack.Screen name="Motor" component={Motor}/>
           <Stack.Screen name="Fertilizers" component={Fertilizers}/>
        
      </Stack.Navigator>
     )
}

export default Homeroute