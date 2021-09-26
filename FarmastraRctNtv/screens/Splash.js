import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native"
 import splashImage from "../Assets/splash_screen_outline.png"

 
// const splash_screen_outline = { uri: /home/adithya/Desktop/shellhacks/agro2/Assets/splash_screen_outline.png}

const Splash = () => {
  return (
    <>
      <ImageBackground source={require("../Assets/splash_screen_outline.png")} style={styles.container}>
          <View style={styles.icon}>
          <Image source={require("../Assets/App_Icon.png")} />
          </View>
          <Text style={styles.text}>
              FARMASTRA
          </Text>
    </ImageBackground>
    </>
  )
}

export default Splash

const styles = StyleSheet.create({
    container : {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent:"center",
        alignItems:"center"
    },
    icon:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        alignContent:"center"
    }
})