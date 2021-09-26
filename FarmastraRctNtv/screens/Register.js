import React,{useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Touchable,
} from "react-native"
 
import ModalPicker from "../Assets/components/ModalPicker";


import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";




const Register = ({navigation}) => {

  return (
   <ImageBackground source={require("../Assets/Signin.png")} style={styles.imageBg}>
      <View style={styles.container}>
      <Text>
           CREATE YOUR ACCOUNT
       </Text>
       <TextInput
       style={styles.input}
       placeholder="Name"
       placeholderTextColor="#000"
       
       />
       <TextInput
       style={styles.input}
       placeholder="Email Id"
       placeholderTextColor="#000"
       />
       <TextInput
       style={styles.input}
       placeholder="Enter your password"
       placeholderTextColor="#000"
       secureTextEntry
       />
       <Text>
           You're preffered language
       </Text>
        <ModalPicker/>
        <TouchableOpacity
        onPress={() => navigation.navigate('Tabs')}
        >
            <View style={styles.button}>
                <Text style={{textAlign:"center"}}>
                    SUBMIT
                </Text>
            </View>
        </TouchableOpacity>
      </View>
   </ImageBackground>
  )
}

export default Register

const styles = StyleSheet.create({
    imageBg:{
        flex:1,
        width:"100%",
        height:"100%"
      },
      container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
      },
      input:{
        borderBottomWidth:1,
        padding:12,
        margin:15,
        width:250,
      },
      button:{
        borderWidth:0,
        padding:12,
        margin:15,
        width:250,
        backgroundColor:"#4EEE94"
       },
      
})