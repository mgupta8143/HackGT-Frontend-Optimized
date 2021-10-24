import * as React from 'react';
import { StatusBar, View, Text, SafeAreaView, Pressable, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';


const homeStyles = {
    background: {
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },
    title: {
      width: '100%',
      display: 'flex',
      height: '40%',
      top: '2%',
    },
    titleDesign: {
      color: '#000000',
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    spacer: {
      backgroundColor: 'white',
      height: '60%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column-reverse',
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50
    },
    button: {
        backgroundColor: '#306EFF',
        paddingVertical: 16,
        paddingHorizontal: 32,
        width: 300,
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: '-10%'
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: 'white',
    },
    normalText: {
        top: '1%',
        fontSize: 20,
        color: 'gray',
        left: '5%',
        paddingRight: 40,
        textAlign: 'center'
    },
    graphic: {
        bottom: '10%',
        zIndex: -1
    }
  
  }

  
export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={{flex: 1}}>
                        <StatusBar translucent backgroundColor="transparent" barStyle="dark-content"/>
            <View style={homeStyles.title}>
                <View style={{height: '35%'}}></View>
                <Text style={homeStyles.titleDesign}>Welcome to LaunchCAD</Text>
                <Text style={homeStyles.normalText}>Bring drawings to real-life CAD models with one click</Text>
                
            </View>
            <View style={homeStyles.spacer}>
                <Pressable
                  onPress={() => navigation.navigate("Scan")}
                  style={homeStyles.button}
                >
                    <Text style={homeStyles.buttonText}>Get started!</Text>
                </Pressable>

                <LottieView 
                  style={homeStyles.graphic}
                  source={require('../assets/scan.json')} autoPlay loop
                />
                
            </View>
        </SafeAreaView>
        );
    
  }
  