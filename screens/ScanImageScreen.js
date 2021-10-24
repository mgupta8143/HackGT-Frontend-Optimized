import * as React from 'react';
import {  View, StatusBar, Pressable, Text, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { RNCamera} from 'react-native-camera';
import DocumentScanner from '../components/DocumentScanner';


const scanImageStyles = {
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    fontSize: 14,
  },
  backButtonStyle: {
    top: '5%',
    left: '5%',
    position: 'absolute',
  },
  backButtonTextStyle: {
    
  },
}

export default function ScanImageScreen({ navigation }) {
  return (
    <SafeAreaView style={scanImageStyles.background}>
      <DocumentScanner navigation={navigation}/>
    </SafeAreaView>
  );
}