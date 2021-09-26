import { NavigationContainer } from "@react-navigation/native";
import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground
} from "react-native"
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";

const Auth = ({ navigation }) => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  return (
    <ImageBackground source={require("../Assets/Signin.png")} style={styles.imageBg}>
        <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder="Email"
      placeholderTextColor="#000"
      onChangeText={(val) => setEmail(val)}
      />
      <TextInput
      style={styles.input}
      placeholder="Password"
      placeholderTextColor="#000"
      secureTextEntry
      />
      {/* <Text>
        email: {email}
      </Text> */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.signin}>
          SIGN IN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signup} onPress={() => navigation.navigate("Register")}>
          Dont have account? Sign Up
        </Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
    )
   
  
}

export default Auth

const styles = StyleSheet.create({
  input:{
    borderBottomWidth:1,
    padding:12,
    margin:15,
    width:250,
  },
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  imageBg:{
    flex:1,
    width:"100%",
    height:"100%"
  },
  button:{
    borderWidth:0,
    padding:12,
    margin:15,
    width:250,
    backgroundColor:"#4EEE94"
   },
   signin:{
     textAlign:"center",
     fontSize:20,
     fontWeight:"bold"
   },
   signup:{
     color:"#00C78C",
     borderBottomWidth:1
   }
})