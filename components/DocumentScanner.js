'use strict';
import React, { PureComponent } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View, StatusBar, Pressable } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Icon } from 'react-native-elements';


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
      zIndex: 2,
    },
    backButtonStyle: {
      top: '25%',
      left: '2%',
      position: 'absolute',
      zIndex: 2,
    },
    backButtonTextStyle: {
      
    },
  }

export default class DocumentScanner extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar translucent backgroundColor="transparent" barStyle="light-content"/>
          <View style={{backgroundColor: 'black', height: '15%'}}>
        <Pressable
            title="Go Back"
            onPress={() => this.props.navigation.navigate("Home")}
            style={scanImageStyles.backButtonStyle}
            >
          <Icon name='west' color="#ffffff"></Icon>
        </Pressable>
      <View style={{display: 'flex', flexDirection: 'row', top: '17%', alignItems: 'center'}}>
        <Text style={scanImageStyles.text}>Scan your drawing below (make sure the isometries are visible)</Text>
      </View>
      </View>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          captureAudio={false}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      const postData = 'data:image/jpg;base64,' + data.base64;
       const RequestURL = "https://httpbin.org/post";
      fetch(RequestURL,
        {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(postData)
        })
        .then(res => {
          this.props.navigation.navigate('STL', res.json());
        })
        .catch((error) => {
           console.log(error);
           this.props.navigation.navigate('STL', {
             error: "Not working"
           });
        })


    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});