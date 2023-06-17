import React, { useState } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import RadialGradient from 'react-native-radial-gradient';
import SlickDots from '../components/slick';
import PrimaryButton from '../components/primarybutton';

// Import the images for mid-sections
import Guranteed from '../asserts/images/guranteed.png';
import Verified from '../asserts/images/verified.png';
import Trusted from '../asserts/images/trusted.png';





const LoadingScreen = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
    if (activeIndex === 2) {
      navigation.navigate('Login');
    }
  };

  const renderMidSection = () => {
    switch (activeIndex) {
      case 0:
        return (
          <View style={styles.midSection}>
            <View style={styles.midImageContainer}>
              <Image
                source={Guranteed}
                style={styles.midImage}
              />
            </View>
            <Text style={styles.midHeader}>Verified Seller</Text>
            <View style={styles.midDescriptionContainer}>
              <Text style={styles.midDescription}>
                As a trusted and authorized seller, we offer a wide range of PlayStation and Xbox games
              </Text>
            </View>
          </View>
        );
      case 1:
        return (
          <View style={styles.midSection}>
            <View style={styles.midImageContainer}>
              <Image
                source={Verified}
                style={styles.midImage}
              />
            </View>
            <Text style={styles.midHeader}>Safeguarded</Text>
            <View style={styles.midDescriptionContainer}>
              <Text style={styles.midDescription}>
                We ensure that every game you buy is safeguarded for your peace of mind.
              </Text>
            </View>
          </View>
        );
      case 2:
        return (
          <View style={styles.midSection}>
            <View style={styles.midImageContainer}>
              <Image
                source={Trusted}
                style={styles.midImage}
              />
            </View>
            <Text style={styles.midHeader}>After Service</Text>
            <View style={styles.midDescriptionContainer}>
              <Text style={styles.midDescription}>
                Here to help with any inquiries, ensuring a smooth and enjoyable experience.
              </Text>
            </View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#171738', '#171738']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{ height: StatusBar.currentHeight }}
      >
        <StatusBar translucent backgroundColor="transparent" />
      </LinearGradient>

      <RadialGradient
        colors={['rgba(166, 130, 255, 0.5)', 'rgba(23, 23, 56, 0.3)']}
        style={styles.gradient}
        stops={[0.1, 1]}
        center={[0.3, 0.2, 0.5]}
        radius={250}
      >
        {renderMidSection()}

        <View style={styles.dotContainer}>
          <SlickDots
            activeIndex={activeIndex}
            count={3}
            activeColor="#A682FF"
            inactiveColor="#62628A"
          />
        </View>

        <View className="w-[80%] mx-auto mb-[70px]">
          <PrimaryButton title="Next" onPress={handleNext} />
        </View>
      </RadialGradient>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171738',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    width: '100%',
    height: '100%',
  },
  midSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  midImageContainer: {
    width: 180,
    height: 180,
  },
  midImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  midHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 32,
  },
  midDescriptionContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  midDescription: {
    color: '#BBBBBB',
    fontSize: 14,
    textAlign: 'center',
  },
  dotContainer: {
    marginTop: 12,
    marginBottom: 63,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});


export default LoadingScreen;

