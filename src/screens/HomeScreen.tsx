import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

export const HomeScreen: React.FunctionComponent = ({}) => {
  return (
    <ImageBackground
      source={require('../../assets/Backgroundbg.png')}
      imageStyle={{resizeMode: 'stretch'}}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('../../assets/logologo.png')} />
      </View>
      <Text>COMEÇAR!</Text>
    </ImageBackground>
  );
};
