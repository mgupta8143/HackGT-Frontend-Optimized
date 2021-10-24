import React, { PureComponent } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View, StatusBar, Pressable } from 'react-native';
import { Icon } from 'react-native-elements';


export default STLViewerScreen = ({ route, navigation }) => {
    console.log(route.params);

    const styles = {
        background: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: 20
        },
        button: {
            backgroundColor: 'black',
            padding: 10,
            marginTop: 10
        }
    }

    if (route.params.error === "Not working") {
        return (
            <View style={styles.background}>
                <Text style={styles.text}>The service is not working currently. Please try again.</Text>
                <Pressable
            title="Go Back"
            onPress={() => navigation.navigate("Scan")}
            style={styles.button}
            >
          <Text style={{color: 'white'}}>Go Back</Text>
        </Pressable>
            </View>
        )
    }

    return (
        <View>
        </View>
    );
}