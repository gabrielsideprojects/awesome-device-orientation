import  React,{useState, useEffect} from 'react';
import { Text, View, StyleSheet, TextInput, Image, KeyboardAvoidingView, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import AssetExample from './components/AssetExample'


export default function App() {
  const [isVerticalOrientation, setIsVerticalOrientation] = useState(true)
  const [firstInputText, setFirstInputText] = useState('Orientation')
  const [secondInputText, setSecondInputText] = useState('Width')
  const [thirdInputText, setThirdInputText] = useState('Height')

  const checkIfDeviceIsInVerticalOrHorizontalOrientation = () =>{
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
    if(screenWidth > screenHeight){
        setIsVerticalOrientation(false)
    }else{
        setIsVerticalOrientation(true)
    }
  }
  
  return (
    <View onLayout={()=>checkIfDeviceIsInVerticalOrHorizontalOrientation()} style={!isVerticalOrientation ?  styles.containerRow : styles.container}>
       <AssetExample/>
       <View>
        <TextInput value={firstInputText} style=      {styles.inputStyle} onChangeText={(text)=> setFirstInputText(text)}/>
        <TextInput style={styles.inputStyle}  value={secondInputText}/>
        <TextInput style={styles.inputStyle}  value={thirdInputText}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ACACAC',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
  },
   containerRow: {
    flex:1,
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ACACAC',
     justifyContent: 'center',
     alignItems: 'center',
    padding: 8,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: 'white',
    width: 200,
    height:50,
    borderRadius: 50,
    paddingLeft:10,
    marginTop:10,
  
  },
});
