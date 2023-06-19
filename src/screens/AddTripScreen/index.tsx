import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';
import {AddTripScreenProps} from '../../Navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TripObj} from '../../utils/tripTypes';

export const AddTripScreen: React.FC<AddTripScreenProps> = ({
  navigation,
}: AddTripScreenProps) => {
  const [tripState, setTripState] = useState({
    name: '',
  });

  const goToAddTrip = (tripId: number) => {
    navigation.navigate('AddPointScreen', {id: tripId});
  };

  const salvarPonto = async (tripName: string) => {
    const newTrip: TripObj = {
      name: tripName,
      id: new Date().getTime(),
      price: 0,
      position: {
        latitude: 0,
        longitude: 0,
      },
      description: '',
    };
    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    trips.push(newTrip);
    await AsyncStorage.setItem('trips', JSON.stringify(trips));
    goToAddTrip(newTrip.id);
  };

  return (
    <View style={styles.screenWrapper}>
      <TextInput
        style={styles.input}
        placeholder="Nome da viagem"
        onChangeText={txt => setTripState({...tripState, name: txt})}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => salvarPonto(tripState.name)}>
        <Text>Salvar Viagem</Text>
      </TouchableOpacity>
    </View>
  );
};
