
import React ,{useState}from 'react';
import {Pressable} from 'react-native';
import {useTranslation} from 'react-i18next';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  TextInput
} from 'react-native';



const ModalPicker = () => {
	
 const [visible, setVisible] = useState(false);
 const [language , setLanguage] = useState('english')
 const languageSetter = (language) =>{
	setVisible(false)
	 setLanguage(language)
 }
  const hideMenu = () => {setVisible(false)};

  const showMenu = () => setVisible(true);

  return (
    <View style={{ height: '10%', alignItems: 'center', justifyContent: 'center' }}>
      <Menu
        visible={visible}
        anchor={
        <TouchableOpacity onPress={showMenu}>
        <View style={styles.container} ><Text>{language}</Text></View>
        </TouchableOpacity>
    }
        onRequestClose={hideMenu}
       >
        <MenuItem onPress={()=>{languageSetter('english')}}>english</MenuItem>
        <MenuItem onPress={()=>{languageSetter('hindi')}}>hindi</MenuItem>
        <MenuItem onPress={()=>{languageSetter('spanish')}}>spanish</MenuItem>
      </Menu>
    </View>
  );


};

export default ModalPicker

styles = StyleSheet.create({
    container:{
        borderWidth:1,
        padding:12,
        margin:15,
        width:250,
    }
})