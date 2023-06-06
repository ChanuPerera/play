import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  StyleSheet,
  Image,
  Animated,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BlurView} from '@react-native-community/blur';
import tw from 'tailwind-react-native-classnames';
import RadialGradient from 'react-native-radial-gradient';
import Logo from '../asserts/images/logo2.png';
import {AppLoader} from '../components/apploader';
import Guranteed from '../asserts/images/guranteed.png';
import Trusted from '../asserts/images/trusted.png';
import Verified from '../asserts/images/verified.png';
import SlickDots from '../components/slick';
import PrimaryButton from '../components/primarybutton';





const LoadingScreen1 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('LoadingScreen2');
  };

  return (
    <View className="flex bg-[#171738] h-full w-full justify-center items-center text-center relative">
      <LinearGradient
        colors={['#171738', '#171738']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: StatusBar.currentHeight }}>
        <StatusBar translucent backgroundColor="transparent" />
      </LinearGradient>

    
      <RadialGradient 
          // className="flex items-center justify-center"
          colors={['rgba(166, 130, 255, 0.5)', 'rgba(23, 23, 56, 0.3)']}
          style={styles.gradient}
          stops={[0.1, 1]}
          center={[0.3, 0.2, 0.5]}
          radius={250}>
          


        <View className="mid-section flex flex-col justify-center items-center mt-[120px]">
          <View className="w-[180px] h-[180px]">
            <Image source={Verified} className="w-[100%] h-[100%] object-fill" />
          </View >
          <Text className="text-[24px] font-bold text-white mt-[32px]">Verified Seller</Text>
          <View className="w-[80%] justify-center text-justify mt-[12px]">
          <Text className="text-center text-[#BBBBBB] text-[14px]">As a trusted and authorized seller, we offer a wide range of PlayStation and Xbox games</Text>
          </View>
          
          
        </View>
        <View className="mt-[128px] mb-[63px]">
          <SlickDots activeIndex={0} count={3} activeColor="#A682FF" inactiveColor="#62628A" />
        </View>
        <View className="w-[80%] mx-auto justify-center text-center">
          <PrimaryButton title="Next" onPress={handleNext}/>
        </View>
      </RadialGradient>
      

      
    </View>
  );
};



const LoadingScreen2 = ({ navigation }) => {
 
  const handleNext = () => {
    navigation.navigate('LoadingScreen3');
  };

  return (
    <View className="flex bg-[#171738] h-full w-full justify-center items-center text-center relative">
      <LinearGradient
        colors={['#171738', '#171738']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: StatusBar.currentHeight }}>
        <StatusBar translucent backgroundColor="transparent" />
      </LinearGradient>

    
      <RadialGradient 
          // className="flex items-center justify-center"
          colors={['rgba(166, 130, 255, 0.5)', 'rgba(23, 23, 56, 0.3)']}
          style={styles.gradient}
          stops={[0.1, 1]}
          center={[0.3, 0.2, 0.5]}
          radius={250}>
          


        <View className="mid-section flex flex-col justify-center items-center mt-[120px]">
          <View className="w-[180px] h-[180px]">
            <Image source={Verified} className="w-[100%] h-[100%] object-fill" />
          </View >
          <Text className="text-[24px] font-bold text-white mt-[32px]">Verified Seller</Text>
          <View className="w-[80%] justify-center text-justify mt-[12px]">
          <Text className="text-center text-[#BBBBBB] text-[14px]">As a trusted and authorized seller, we offer a wide range of PlayStation and Xbox games</Text>
          </View>
          
          
        </View>

        <View className="mt-[128px] mb-[63px]">
          <SlickDots activeIndex={1} count={3} activeColor="#A682FF" inactiveColor="#62628A" />
        </View>


        <View className="w-[80%] mx-auto justify-center text-center">
          <PrimaryButton title="Next" onPress={handleNext}/>
        </View>

      </RadialGradient>
      

      
    </View>
  );
};

const LoadingScreen3 = ({ navigation }) => {
 
  const handleNext = () => {
    navigation.navigate('LoadingScreen1');
  };


  return (
    <View className="flex bg-[#171738] h-full w-full justify-center items-center text-center relative">
      <LinearGradient
        colors={['#171738', '#171738']} 
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: StatusBar.currentHeight }}>
        <StatusBar translucent backgroundColor="transparent" />
      </LinearGradient>

    
      <RadialGradient 
          // className="flex items-center justify-center"
          colors={['rgba(166, 130, 255, 0.5)', 'rgba(23, 23, 56, 0.3)']}
          style={styles.gradient}
          stops={[0.1, 1]}
          center={[0.3, 0.2, 0.5]}
          radius={250}>
          


        <View className="mid-section flex flex-col justify-center items-center mt-[120px]">
          <View className="w-[180px] h-[180px]">
            <Image source={Verified} className="w-[100%] h-[100%] object-fill" />
          </View >
          <Text className="text-[24px] font-bold text-white mt-[32px]">Verified Seller</Text>
          <View className="w-[80%] justify-center text-justify mt-[12px]">
          <Text className="text-center text-[#BBBBBB] text-[14px]">As a trusted and authorized seller, we offer a wide range of PlayStation and Xbox games</Text>
          </View>
          
         
        </View>

        <View className="mt-[128px] mb-[63px]">
          <SlickDots activeIndex={2} count={3} activeColor="#A682FF" inactiveColor="#62628A" />
        </View>

        <View className="w-[80%] mx-auto justify-center text-center">
          <PrimaryButton title="Next" onPress={handleNext}/>
        </View>
       
      </RadialGradient>
      

      
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
    
  },

  primarybutton:
  {
    borderRadius: 20,
    backgroundColor:'red',
  }
});

export {LoadingScreen1, LoadingScreen2, LoadingScreen3};
