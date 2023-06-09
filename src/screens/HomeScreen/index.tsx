import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {assets} from './assets';
import {styles} from './styles';
import {isIphone} from '../../utils/isIphone';

export const HomeScreen: React.FunctionComponent = ({navigation}) => {
  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown(!isShown);
  };

  const goToTrips = () => {
    navigation.navigate('TripsScreen');
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
      )}
    </ImageBackground>
  );
};
