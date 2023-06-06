import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import Logo from '../asserts/images/logo2.png';

export const AppLoader = () => {
  return (
    <View className="flex justify-center items-center p-10">

      <LottieView source={require('../asserts/js/loading.json') } 
      autoPlay
      loop
      />
    </View>
  );
};




