import 'react-native-gesture-handler';

import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native"
    
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

import Home from "../screens/Home";
import Profile from "../screens/Profile";
import Homeroute from "/home/adithya/Desktop/shellhacks/agro2/navigation/Homeroute"
import ML from '../screens/MlDetect';

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Homeroute} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                      }}/>
           < Tab.Screen 
           name="ML" component={ML}
           options={{
            tabBarLabel: 'MLDetect',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="leaf" color={color} size={26} />
            ),
          }}
           />
            <Tab.Screen name="Profile" component={Profile}
                            
            />
        </Tab.Navigator>
    )
}

export default Tabs