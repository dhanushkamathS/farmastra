
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
            <Text style={{fontSize:30, color:"#03245C",}}>Weather</Text>
            <Text style={{fontSize:30, color:"#03245C"}}>    Forcast</Text>
          </View>

          <Image style={{width:100,height:100,marginLeft:50,marginTop:20}} source={require("../Assets/weather-news.png")}/>
       </View>
      </View>
    </View>
  )
}

const weatherapi = [, , ]


const LocationContainer = () => {
  return(
    <View style={{backgroundColor:"#7DCBC4",width:160,borderRadius:10,marginTop:25,marginLeft:25,padding:5}}>
     <View style={{padding:5}}>
        <Text style={{fontSize:20}}>26/09</Text>
      <Text style={{fontSize:20}}>Bangalore,India</Text>
     </View>
    </View>
  )
}

const DateContainer = () => {
 
  const [count ,setcount] = useState(0)
  const [today,setToday] = useState({"daily_chance_of_rain": 94, "date": "2021-09-26", "prediction": "Moderate rain", "temp_c": 28.7, "temp_f": 83.7, "wind_mph": 12.1})
  const [tom,setTom] = useState({"daily_chance_of_rain": 88, "date": "2021-09-27", "prediction": "Patchy rain possible", "temp_c": 28.1, "temp_f": 82.6, "wind_mph": 15})
  const [daytom,setDayTom] = useState({"daily_chance_of_rain": 80, "date": "2021-09-28", "prediction": "Patchy rain possible", "temp_c": 24.7, "temp_f": 76.5, "wind_mph": 19.9})
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
    <View  >
      <View style={{display:'flex',flexDirection:"row",backgroundColor:"#A3EBB1",marginTop:10,padding:10}}>
     <TouchableOpacity onPress={()=>{getdate(0)}}>
       <Text style={{fontSize:20,marginLeft:10,marginRight:10,borderRightWidth:3,paddingRight:9}}>{today["date"]}</Text>
     </TouchableOpacity>

    <TouchableOpacity onPress={()=>{getdate(1)}}>
       <Text style={{fontSize:20,marginLeft:5,marginRight:10,borderRightWidth:3,paddingRight:9}}>{tom["date"]}</Text>
     </TouchableOpacity>

    <TouchableOpacity onPress={()=>{getdate(2)}}>
       <Text style={{fontSize:20,marginLeft:10,marginRight:10}}>{daytom["date"]}</Text>
     </TouchableOpacity>
    </View>

    <View style={{marginTop:20,height:230,padding:20,}}>
      <Text style={{fontSize:30}}>Temperature in F: {weather["temp_f"]}</Text>
      <Text style={{fontSize:30}}>Temperature in C: {weather["temp_c"]}</Text>
      <Text style={{fontSize:30}}>Wind in Mph: {weather["wind_mph"]}</Text>
      <Text style={{fontSize:30}}>Weather Pridiction: {weather["prediction"]}</Text>
      <Text style={{fontSize:30}}>Chances of Rain: {weather["daily_chance_of_rain"]}</Text>
    </View>

    </View>
  )
}
const Weather = () => {

  return(
    <View style={{backgroundColor:"#FFFEF2"}}>
     <WeatherComponent/>
      <LocationContainer/>
      <DateContainer/>
    </View>
  )
};

const styles = StyleSheet.create({  
  weatherBox : {
    backgroundColor:"#8CDEFF",
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


export default Weather;