
const SERVER_URL = 'http://192.168.0.29:3000';
import React, { useState } from 'react';
// Import core components
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const WeatherComponent = () =>{
  return(
    <View>
      <View style={styles.weatherBox}>
       <View style={{display:'flex',flexDirection:"row"}}>
          <Image style={{width:100,height:100}} source={require("../Assets/App_Icon.png")}/>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:30,marginTop:35}}>Soil moisture</Text>
            {/* <Text style={{fontSize:30}}>    forcast</Text> */}
          </View>

          <Image style={{width:100,height:100,marginLeft:10,marginTop:20}} source={require("../Assets/plant.png")}/>
       </View>
      </View>
    </View>
  )
}




const DateContainer = () => {
 

  const [today,setToday] = useState({"humidity" : "70%", "soilTempe" : "6.9c","fertilizerPercentage" : "58"})
  const [tom,setTom] = useState({"humidity" : "55%", "soilTempe" : "8c","fertilizerPercentage" : "49"})
  const [daytom,setDayTom] = useState({"humidity" : "40%", "soilTempe" : "10c","fertilizerPercentage" : "43"})
  const [weather,setWeather] = useState(today)
  const getdate = async (date) => {
      console.log(weatherapi)
      if(date==0){
        setWeather(today)
      }
      if(date == 1){
        setWeather(tom)
      }
      if(date ==2){
        setWeather(daytom)
      }
  }
  
  return(
    <View>
      <View style={{display:'flex',flexDirection:"row",marginTop:50}}>
     <TouchableOpacity onPress={()=>{getdate(0)}}>
       <Text style={{fontSize:20,marginLeft:50,marginRight:50,paddingRight:9,backgroundColor:"#C4C4C4"}}>30 cm</Text>
     </TouchableOpacity>

    <TouchableOpacity onPress={()=>{getdate(1)}}>
       <Text style={{fontSize:20,marginLeft:5,marginRight:50,paddingRight:9,backgroundColor:"#C4C4C4"}}>60 cm</Text>
     </TouchableOpacity>

    <TouchableOpacity onPress={()=>{getdate(2)}}>
       <Text style={{fontSize:20,marginLeft:10,marginRight:10,backgroundColor:"#C4C4C4"}}>100 cm</Text>
     </TouchableOpacity>
    </View>

   
       <Image style={{width:200,height:200,marginRight:10,marginLeft:100,marginTop:20}} source={require("../Assets/root.png")}/>

    <View style={{marginTop:20,height:230}}>
      <Text style={{fontSize:30,marginBottom:20,backgroundColor:"#7BE382",width:200,paddingLeft:10,marginLeft:30,borderRadius:15}}>humidity {weather["humidity"]}</Text>
      <Text style={{fontSize:30,marginBottom:20,backgroundColor:"#7BE382",paddingLeft:10,marginLeft:30,width:300,borderRadius:15}}>soil temperature {weather["soilTempe"]}</Text>
      <Text style={{fontSize:30,backgroundColor:"#7BE382",marginLeft:30,width:350,borderRadius:15}}>fertilizer percentage {weather["fertilizerPercentage"]}%</Text>
    </View>

   

    </View>
  )
}
const Soil = () => {

  return(
    <View>
     <WeatherComponent/>
      <DateContainer/>
    </View>
  )
};

const styles = StyleSheet.create({  
  weatherBox : {
    backgroundColor:"#FEDC56",
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


export default Soil;