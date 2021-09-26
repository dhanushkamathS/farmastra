import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native"

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

import Homeroute from "../navigation/Homeroute";


const Home = ({ navigation }) => {
  return (
      <View style={{backgroundColor:"#FFF8DC"}}>
      <View style={styles.header}>
        <View style={styles.headerinner}>
          <Text style={styles.headerText1}> 
            Hello User
          </Text>
          <Text style={styles.headerText2}>
            How are you doing today?
          </Text>
          {/* <View style={styles.image1}>
        <Image
                  source={require("../Assets/leaf.png")}
                  style={styles.image}
                  />
        </View> */}
        </View>
      </View>
      <View style={styles.container}>
          <View style={styles.box}>
              <View style={styles.inner2}>
                  <TouchableOpacity onPress={() => navigation.navigate('Weather')} > 
                  <Image
                  source={require("../Assets/weather.png")}
                  style={styles.image}
                  />
                  </TouchableOpacity>
              </View>
          </View>

          <View style={styles.box}>
              <View style={styles.inner1}>
              <TouchableOpacity onPress={() => navigation.navigate('Fertilizers')}>
              <View >
                  <Image
                  source={require("../Assets/fertilizer.png")}
                  style={styles.image}
                  />
              </View>
              </TouchableOpacity>
              </View>
          </View>

          <View style={styles.box}>
              <View style={styles.inner1}>
                  <TouchableOpacity onPress={() => navigation.navigate('Motor')}>
                  <View >
                  <Image
                  source={require("../Assets/motor.png")}
                  style={styles.image}
                  />
                  </View>
                  </TouchableOpacity>
              </View>
          </View>

          <View style={styles.box}>
              <View style={styles.inner2}>
                  <TouchableOpacity onPress={() => navigation.navigate('Soil')}>
                  <View >
                  <Image
                  source={require("../Assets/shovel.png")}
                  style={styles.image}
                  />
                  </View>
                  </TouchableOpacity>
              </View>
          </View>

          
         
        </View>
</View>
  )
}


export default Home;

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:"80%",
        paddingTop:40,
        paddingBottom:40,
        paddingLeft:10,
        paddingRight:10,
        flexDirection: "row",
        flexWrap: "wrap",

    },
    box:{
        width:"50%",
        height:"50%",
        padding:5,
        
    },
    inner1: {
        flex:1,
        backgroundColor:"#FFE4C9",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:1,
        padding:5
        
    },
    welcome:{
        justifyContent:"flex-start",
        flexDirection:"row",
        paddingStart:20,
        paddingBottom:40
    },
    text :{
      fontSize:24,
      fontFamily:"bold",
      
    },
    header:{
      width:"100%",
      height:"20%",
      alignItems:"flex-start",
      justifyContent:"center",
      backgroundColor:"#FFE77A",
      borderBottomLeftRadius:20,
      borderBottomEndRadius:20
    },
    headerinner:{
      borderRadius:10
    },
    inner2: {
      flex:1,
      backgroundColor:"#A3EBB1",
      alignItems:"center",
      justifyContent:"center",
      borderRadius:1,
      padding:5
    },
    headerText1:{
      paddingLeft:20,
      fontSize:30,
      color:"#2C5F2D",
      fontFamily:"bold",
    },
    headerText2:{
      paddingLeft:20,
      fontSize:20,
      color:"#2C5F2D"
    },
    image : {
        width:150,
        height:150,
    },
    image1 : {

      flexDirection:"row",
      justifyContent:"flex-end",
      alignItems:"flex-end",
      paddingLeft:10
  },
})

