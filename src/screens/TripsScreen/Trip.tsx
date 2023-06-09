import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export interface TripsType {
  title: string;
  price: string;
  onPress: () => void;
}

export const Trips: React.FunctionComponent<TripsType> = ({
  title,
  price,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.tripWrapper}>
      <View>
        <View style={styles.tripImage}>
          <Text>image</Text>
        </View>
        <Text>{title}</Text>
        <Text style={styles.tripPrice}>R$ {price}</Text>
      </View>
    </TouchableOpacity>
  );
};
