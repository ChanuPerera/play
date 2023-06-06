import React from 'react';
import {View, Text, StatusBar, Dimensions, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import tw from 'tailwind-react-native-classnames';
import RadialGradient from 'react-native-radial-gradient';

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

      <View className="bg-[#171738] h-full w-full justify-center items-center text-center" >
        <RadialGradient
          colors={['#A682FF', '#171738']}
          style={styles.gradient}
          stops={[0.1, 0.9]}
          center={[0.3,0.5, 0.3]}
          radius={200}
          >
          
        </RadialGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    
    width: '100%',
    height: '100%',
    opacity: 0.4,
  },
});

export default Home;
