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



const Home = ({ navigation }) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LoadingScreen');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);


  const handleAppLoaderFinish = () => {
    navigation.navigate('LoadingScreen');
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
          className="flex items-center justify-center"
          colors={['rgba(166, 130, 255, 0.5)', 'rgba(23, 23, 56, 0.3)']}
          style={styles.gradient}
          stops={[0.1, 1]}
          center={[0.3, 0.2, 0.5]}
          radius={250}>
          


        <View className="mid-section flex flex-col justify-center items-center">
          <View className="w-[100px] h-[100px]">
            <Image source={Logo} className="w-[100%] h-[100%] object-fill" />
          </View>
          {/* <Button title="Next" onPress={handleNextButton}/> */}
        <AppLoader onFinish={handleAppLoaderFinish}/>
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
});

export default Home;
