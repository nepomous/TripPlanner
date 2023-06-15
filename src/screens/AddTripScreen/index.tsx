import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import {styles} from './styles';
import {assets} from './assets';
import {AddTripScreenProps} from '../../Navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AddTripScreen: React.FC<AddTripScreenProps> = ({
  navigation,
}: AddTripScreenProps) => {
  const [tripState, setTripState] = useState({
    trip: '',
  });
  const trip = {
    name: 'EuroTrip 2023',
    price: '5000',
    places: [
      {
        id: '1',
        name: 'Amsterdam',
        description: 'chegada',
        price: 100,
        lat: 0,
        long: 0,
      },
      {
        id: '2',
        name: 'Bruxelas',
        description: 'hospedagem',
        price: 200,
        lat: 0,
        long: 0,
      },
    ],
  };

  const goToAddTrip = (tripId: number) => {
    navigation.navigate('AddPointScreen', {id: tripId});
  };

  const salvarPonto = async (trip: string) => {
    const newTrip = {
      trip,
      id: new Date().getTime(),
      price: 0,
      latitude: 0,
      longitude: 0,
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
        onChangeText={txt => setTripState({...tripState, trip: txt})}
      />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => salvarPonto(tripState.trip)}>
        <Text>Salvar Viagem</Text>
      </TouchableOpacity>
    </View>
  );
};
