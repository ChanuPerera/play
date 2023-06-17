import React, {useState} from 'react';
import { View, Text, TextInput, StatusBar,Keyboard, TouchableOpacity, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';
import PrimaryButton from '../components/primarybutton';
import LinearGradient from 'react-native-linear-gradient';
// import PasswordField from '../components/password';
import InputField from '../components/inputField';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Icon from 'react-native-vector-icons/Feather';



const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter your First Name'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Enter your Last Name'),
  contact: Yup.string()
    .min(10, 'Contact must contain only 10 digits')
    .max(10, 'Contact must contain only 10 digits')
    .matches(/^[0-9]+$/,'Must be 10 digits')
    .required('Enter your valid Mobile number'),
    
  city: Yup.string()
    .required('Nearest Home Town'),
  password: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required('Please enter a password'),
  confirmPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password'), null], 'Passwords do not match'),
});




const SignUp = ({ navigation}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };


  const handleLogin = () => {
    navigation.navigate('Login');
  }



  return (

    

<KeyboardAvoidingView >
      <ScrollView 
      
      bounces={false} >
      
    <Formik initialValues={{

      firstName: '',
      lastName: '',
      contact: '',
      city: '',
      password: '',
      confirmPassword: '',


    }}
      validationSchema={SignupSchema}
      onSubmit={values => Alert.alert(JSON.stringify(values))}
    >
      {({ values, errors, touched, handleChange, setFieldTouched, isValid, handleSubmit }) => (






        <View className="bg-white h-full w-full flex felx-col justify-center items-center">
          <LinearGradient
            className="absolute"
            colors={['#6A11CB', '#6A11CB']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ height: StatusBar.currentHeight }}>
            <StatusBar translucent backgroundColor="#6A11CB" />
          </LinearGradient>


          <View className="Login-form p-5 h-full w-full">
            <View className="form-body mt-[42px] text-center justify-center items-center ">
              <Text className="text-black text-[32px]">Create an account</Text>
              <Text className="text-[#6A11CB] text-[16px]">Please fill your details to continue</Text>

              <View className="input-section w-full mt-6">
                
                
                <View className="input-container mb-6 px-5 flex flex-col items-center border rounded-full border-[#6A11CB]">
                  <View className="flex flex-row justify-between items-center text-black w-full">
                    <InputField placeholder="First Name" icon="user"
                      value={values.firstName}
                      onChangeText={handleChange('firstName')}
                      onBlur={() => setFieldTouched('firstName')}
                    />
                  </View>
                    <View className="absolute mt-[52px] w-full">
                        {touched.firstName && errors.firstName && (
                          <Text className="text-red-700">{errors.firstName}</Text>
                        )}
                      </View>
                </View>

                <View className="input-container mb-6 px-5 flex flex-col items-center border rounded-full border-[#6A11CB]">
                  <View className="flex flex-row justify-between items-center text-black w-full">
                    <InputField placeholder="Last Name" icon="user" 
                      value={values.lastName}
                      onChangeText={handleChange('lastName')}
                      onBlur={() => setFieldTouched('lastName')}
                    />
                  </View>
                      <View className="absolute mt-[52px] w-full">
                        {touched.lastName && errors.lastName && (
                          <Text className="text-red-700">{errors.lastName}</Text>
                        )}
                      </View>
                  </View>

                <View className="input-container mb-6 px-5 flex flex-col items-center border rounded-full border-[#6A11CB]">
                  

                  <View className="flex flex-row justify-between items-center text-black w-full">
                    <InputField placeholder="Mobile number" icon="phone" 
                        value={values.contact}
                        onChangeText={handleChange('contact')}
                        onBlur={() => setFieldTouched('contact')}
                        keyboardType='phone-pad'
                      />
                  </View>
                      <View className="absolute mt-[52px] w-full">
                        {touched.contact && errors.contact && (
                          <Text className="text-red-700">{errors.contact}</Text>
                        )}
                      </View>
                </View>

                <View className="input-container mb-6 px-5 flex flex-col items-center border rounded-full border-[#6A11CB]">

                  <View className="flex flex-row justify-between items-center text-black w-full">
                    <InputField placeholder="HomeTown" icon="home"
                        value={values.city}
                        onChangeText={handleChange('city')}
                        onBlur={() => setFieldTouched('city')}
                      />
                  </View>
                      <View className="absolute mt-[52px] w-full">
                        {touched.city && errors.city && (
                          <Text className="text-red-700">{errors.city}</Text>
                        )}
                      </View>


                </View>


                <View className="input-container mb-6 px-5 flex flex-col items-center border rounded-full border-[#6A11CB]">
                 
                    <View className="flex flex-row justify-between items-center text-black w-full">
                      <TextInput
                      className="text-black text-[21px] w-4/5"
                      placeholder="Password"
                      placeholderTextColor="#999999"
                      secureTextEntry={!showPassword}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={() => setFieldTouched('password')}
                    />
                      <TouchableOpacity onPress={toggleShowPassword} style={{ padding: 10 }}>
                        <Icon name={showPassword ? 'eye' : 'eye-off'} size={24} color="#BE82FF" />
                      </TouchableOpacity>

                    </View>
                      <View className="absolute mt-[52px] w-full">
                        {touched.password && errors.password && (
                          <Text className="text-red-700">{errors.password}</Text>
                        )}
                      </View>
                 
                </View>

                <View className="input-container mb-6 px-5 flex flex-col items-center border rounded-full border-[#6A11CB]">
                  <View className="flex flex-row justify-between items-center text-black w-full">
                      <TextInput
                      className="text-black text-[21px] w-4/5"
                      placeholder="Confirm Password"
                      placeholderTextColor="#999999"
                      secureTextEntry={!showConfirmPassword}
                      value={values.confirmPassword}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={() => setFieldTouched('confirmPassword')}
                    />
                      <TouchableOpacity onPress={toggleShowConfirmPassword} style={{ padding: 10 }}>
                        <Icon name={showConfirmPassword ? 'eye' : 'eye-off'} size={24} color="#BE82FF" />
                      </TouchableOpacity>

                  </View>
                  
                      <View className="absolute mt-[52px] w-full">
                        {touched.confirmPassword && errors.confirmPassword  && (
                          <Text className="text-red-700">{errors.confirmPassword}</Text>
                        )}
                      </View>
                </View>


                <PrimaryButton title="Register" className="w-full" 
                  onPress={handleSubmit}
                />

                <View className="flex mt-3  w-full justify-center text-center">
                  <Text className="text-[16px] text-black text-center">Already have an account? <Text className="font-semibold text-[#6A11CB] " onPress={handleLogin}>Login Now</Text> </Text>
                </View>

              </View>



            </View>

          </View>

        </View>
      )}
    </Formik>

    </ScrollView>
    </KeyboardAvoidingView>
  );

};

export default SignUp;
