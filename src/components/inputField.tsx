import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const InputField = ({ placeholder, icon, value, onChangeText, onBlur, keyboardType }) => {

    return (
        <View className="flex flex-col justify-between items-center text-black w-full" >
            <View className="flex flex-row justify-between items-center text-black w-full">

                <TextInput
                    className="text-black text-[21px] w-4/5"
                    placeholder={placeholder}
                    placeholderTextColor="#999999"
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    keyboardType={keyboardType}

                />
                
                {icon && placeholder !== 'Password' && (
                    <TouchableOpacity style={{ padding: 10 }} >
                        <Icon name={icon} size={24} color="#BE82FF" />
                    </TouchableOpacity>
                )}
            </View>



        </View>
    );
    
};

export default InputField;
