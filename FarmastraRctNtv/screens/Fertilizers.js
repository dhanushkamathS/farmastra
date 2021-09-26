
const SERVER_URL = 'http://192.168.0.29:3000';
import React, { useState } from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

const WeatherComponent = () =>{
  return(
    <View>
      <View style={styles.weatherBox}>
       <View style={{display:'flex',flexDirection:"row"}}>
          <Image style={{width:100,height:100}} source={require("../Assets/App_Icon.png")}/>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:30}}>FERTILIZERS</Text>
            <Text style={{fontSize:30}}>   COMPANIES</Text>
          </View>

          <Image style={{width:100,height:100,marginLeft:4,marginTop:20}} source={require("../Assets/fert.png")}/>
       </View>
      </View>
    </View>
  )
}



const Fertilizers = () => {

  return(
    <ScrollView>
    <View>
     <WeatherComponent/>
     <View style={{marginTop:30}}>
       
        <View style={{marginLeft:40}}>
          <Text style={{fontSize:40,backgroundColor:'#CA937B',paddingLeft:20,width:200,borderRadius:15}}>Organic</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Jobe's organic all purpose</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Dr.Earth root zone starter fertilizer</Text>
          <Text  style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Niggle soil builder</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Humate soil condition</Text>
        </View>

         <View style={{marginLeft:40,marginTop:20}}>
          <Text style={{fontSize:40,backgroundColor:'#CA937B',paddingLeft:20,width:250,borderRadius:15}}>Bio organic </Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Trung hiep loi fertilizer</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Nexus technology</Text>
          <Text  style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>varsha bioscience</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>microbial biofertilizer</Text>
        </View>

         <View style={{marginLeft:40,marginTop:20,marginBottom:30}}>
          <Text style={{fontSize:40,backgroundColor:'#CA937B',paddingLeft:20,width:200,borderRadius:15}}>Compost</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Humic</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Carbon Compost</Text>
          <Text  style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Daily dump</Text>
          <Text style={{fontSize:25,backgroundColor:"#E9CBA7",marginTop:10,paddingLeft:10,width:320,borderRadius:15}}>Bokashi</Text>
        </View>
     </View>
    </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({  
  weatherBox : {
    backgroundColor:"#B89778",
    height:150,
    borderBottomRightRadius : 30,
    borderBottomLeftRadius : 30
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});


export default Fertilizers;