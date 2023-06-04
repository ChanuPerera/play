import React from 'react';
import {View, Text, StatusBar, Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import tw from 'tailwind-react-native-classnames';

const Home = () => {
  const screenWidth = Dimensions.get('window').width;
  const circleWidth = 0.7 * screenWidth;

  return (
    <View className="flex ">
      <LinearGradient
        colors={['#171738', '#171738']} // Replace 'red' with your app's theme color
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{height: StatusBar.currentHeight}}>
        <StatusBar translucent backgroundColor="transparent" />
      </LinearGradient>

      <View className="bg-[#171738] h-full justify-center items-center flex">
        <View
          className={'bg-[#A682FF] rounded-full'}
          style={{width: circleWidth, height: circleWidth}}
        />
      </View>
    </View>
  );
};

export default Home;
