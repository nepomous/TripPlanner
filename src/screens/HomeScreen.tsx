import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

export const HomeScreen: React.FunctionComponent = ({}) => {
  const [state, setState] = useState(0)
  
  const handleCounter = () => {
    setState(state+1)
  }

  return (
    <ImageBackground
      source={require('../../assets/Backgroundbg.png')}
      imageStyle={{resizeMode: 'stretch'}}
      style={{
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-between',
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
      <TouchableWithoutFeedback onPress={handleCounter}>
        <View style={{backgroundColor: 'white'}}>
          <Text style={{textAlign: 'center', fontSize: 18}}>
            COMEÇAR! {state}
          </Text>
        </View>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
