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

export const HomeScreen: React.FunctionComponent = ({}) => {
  const [isShown, setIsShown] = useState(true);

  const handleShow = () => {
    setIsShown(!isShown);
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
          <View style={styles.buttonBackground}>
            <Text style={styles.buttonText}>COMEÇAR!</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback onPress={handleShow}>
          <View style={styles.buttonEmptyStateBackground}>
            <Image source={assets.pin} style={styles.pin} />
            <Text style={styles.buttonEmptyStateText}>
              Vamos planejar sua primeira viagem?
            </Text>
            <Image source={assets.arrowRight} style={styles.arrow} />
          </View>
        </TouchableWithoutFeedback>
      )}
    </ImageBackground>
  );
};
