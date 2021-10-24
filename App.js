import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen from './screens/HomeScreen';
import ScanImageScreen  from './screens/ScanImageScreen';
import STLViewerScreen from './screens/STLViewerScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Scan"
        component={ScanImageScreen}
        options={{
          title: '',
          headerShown: false
        }}
      />

  <Stack.Screen
        name="STL"
        component={STLViewerScreen}
        options={{
          title: '',
          headerShown: false
        }}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}