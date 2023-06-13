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

export const AddTripScreen: React.FC<AddTripScreenProps> = ({
  navigation,
}: AddTripScreenProps) => {
  const [markerState, setMarkerState] = useState({
    position: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    pointName: '',
    description: '',
    price: '0',
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

  const salvarPonto = () => {};

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.photoWrapper}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            draggable
            coordinate={markerState.position}
            onDragEnd={evt =>
              setMarkerState({
                ...markerState,
                position: evt.nativeEvent.coordinate,
              })
            }
          />
        </MapView>
        <View style={styles.backButtonWrapper}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image source={assets.arrowLeft} />
          </TouchableOpacity>
        </View>
        <Text style={styles.tripPlanTitle}>{trip.name}</Text>
        <Text style={styles.tripPlanPrice}>{trip.price}</Text>
      </View>
      <TextInput
        placeholder="Nome do ponto"
        onChangeText={txt => setMarkerState({...markerState, pointName: txt})}
      />
      <TextInput
        placeholder="Descrição do local"
        onChangeText={txt => setMarkerState({...markerState, description: txt})}
      />
      <TextInput
        placeholder="Preço"
        onChangeText={txt => setMarkerState({...markerState, price: txt})}
      />
      <TouchableOpacity onPress={salvarPonto}>
        <Text>Salvar Ponto</Text>
      </TouchableOpacity>
    </View>
  );
};
