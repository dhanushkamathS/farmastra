
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

import DocumentPicker from 'react-native-document-picker';
const WeatherComponent = () =>{
  return(
    <View>
      <View style={styles.weatherBox}>
       <View style={{display:'flex',flexDirection:"row"}}>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:30,marginTop:35,marginLeft:60}}>Pest Detection</Text>
            {/* <Text style={{fontSize:30}}>    forcast</Text> */}
          </View>

          <Image style={{width:100,height:100,marginLeft:10,marginTop:20}} source={require("../Assets/virus.png")}/>
       </View>
      </View>
    </View>
  )
}





const MlDetect = () => {

  const [singleFile, setSingleFile] = useState(null);
  const [disease , setDisease] = useState("pick image")

   const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      setSingleFile(res);
    } catch (err) {
      setSingleFile(null);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };

  const checkDisease =() =>{
   setDisease("Cassava Brown Streak Disease (CBSD)")
  }

  return(
    <View>
     <WeatherComponent/>
      <Text style={{fontSize:20,paddingLeft:100,marginTop:50,marginBottom:30,backgroundColor:"#7BE382"}}>{disease}</Text>
       <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={selectFile}>
        <Text style={styles.buttonTextStyle}>Select File</Text>
      </TouchableOpacity>

       <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={()=>{checkDisease()}}>
        <Text style={styles.buttonTextStyle}>check</Text>
      </TouchableOpacity>

      
       <Image style={{width:200,height:200,marginLeft:200,marginTop:150}} source={require("../Assets/leaffy.png")}/>
    </View>
  )
};

const styles = StyleSheet.create({  
  weatherBox : {
    backgroundColor:"#7BE382",
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
   buttonStyle: {
    backgroundColor: '#307ecc',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#307ecc',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 15,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
});


export default MlDetect;