//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import VerifiedSeller from './src/screens/Verified';
import { LoadingScreen1, LoadingScreen2, LoadingScreen3 } from './src/screens/Loading';
// import LoadingScreen from './src/screens/Loading';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="LoadingScreen1" component={LoadingScreen1} />
        <Stack.Screen name="LoadingScreen2" component={LoadingScreen2} />
        <Stack.Screen name="LoadingScreen3" component={LoadingScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

//make this component available to the app
export default App;
