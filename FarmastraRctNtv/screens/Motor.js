import React,{useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Image
} from "react-native"

import CountDown from 'react-native-countdown-component';
 


const Motor= () => {
  const [button,setButton] = useState(false)
  const [hour,sethour]  = useState(0)
  const [min,setmin] = useState(0)
  const [total ,setTotal] = useState(0)
  const startTimer = (hour,min) =>{
    const total = hour * 3600 + min * 60
    setTotal(total)
    setButton(true)
  }

  return (
    <ImageBackground
        source={require("../Assets/MotorBG.png")}
        style={{flex:1,width:"100%",height:"100%"}}
        >
      <View style={styles.container}>
        
        {button ?
         <CountDown
         size={35}
        until={5}
        onFinish={() => alert('Motor is turned Off')}
        digitStyle={{backgroundColor: '#eee', borderWidth: 3, borderColor: '#A0B4F0'}}
        digitTxtStyle={{color: '#A0B4F0',}}
        timeLabelStyle={{color: 'red', fontWeight: 'bold',}}
        separatorStyle={{color: '#A0B4F0'}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{m: null, s: null}}
        showSeparator
      />
         :
          <View>
            <TextInput onChangeText={sethour} value={hour} placeholder="hours" keyboardType="numeric" style={styles.textIn} />
           <TextInput onChangeText={setmin} value={min} placeholder="min" keyboardType="numeric" style={styles.textIn}/>
          <TouchableOpacity onPress={()=>{startTimer(hour,min)}}>
            <View >
            <Image
            source={require("../Assets/power-button.png")}
            style={styles.startBtn}
            />
            </View>
          </TouchableOpacity>
          </View>
         
         }
        
      </View>
      </ImageBackground>
    )
};



export default Motor;

styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  startBtn:{
    marginTop: 20,
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 120,
    backgroundColor: '#ccc',
  },
  textIn:{
    borderWidth:1,
    padding:12,
    margin:15,
    width:200,
    backgroundColor:"#8CD3FF"
    
  }
})