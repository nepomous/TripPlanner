import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {assets} from './assets';
import {styles} from './styles';
import {isIphone} from '../../utils/isIphone';
import {HomeScreenProps} from '../../Navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = ({
  navigation,
}: HomeScreenProps) => {
  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown(!isShown);
  };

  const goToTrips = () => {
    navigation.navigate('TripsScreen');
  };

  //todo - remover quando encerrar o projeto
  const clearAsyncStorage = async () => {
    await AsyncStorage.clear();
  };

  return (
    <ImageBackground
      source={assets.background}
      imageStyle={{resizeMode: 'stretch'}}
      style={styles.background}>
      <View style={styles.logoTripPlannerWrapper}>
        <Image source={assets.tripPlannerLogo} />
      </View>
      {!isShown ? (
        <TouchableWithoutFeedback onPress={handleShow}>
          <View
            style={[
              styles.buttonBackground,
              isIphone() ? {paddingBottom: 32} : null,
            ]}>
            <Text style={styles.buttonText}>COMEÇAR!</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <>
          <TouchableWithoutFeedback onPress={goToTrips}>
            <View style={styles.buttonEmptyStateBackground}>
              <Image source={assets.pin} style={styles.pin} />
              <Text style={styles.buttonEmptyStateText}>
                Vamos planejar sua primeira viagem?
              </Text>
              <Image
                source={assets.arrowRight}
                style={[styles.arrow, isIphone() ? {marginBottom: 16} : null]}
              />
            </View>
          </TouchableWithoutFeedback>
          {/* REMOVER QUANDO ENCERRAR O PROJETO */
          /* <TouchableOpacity onPress={clearAsyncStorage}>
            <View style={styles.buttonEmptyStateBackground}>
              <Text style={styles.buttonEmptyStateText}>
                {'Limpar AsyncStorage'}
              </Text>
            </View>
          </TouchableOpacity> */}
        </>
      )}
    </ImageBackground>
  );
};
