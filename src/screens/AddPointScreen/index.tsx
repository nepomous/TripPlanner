import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import {assets} from './assets';
import {AddPointScreenProps} from '../../Navigation/types';
import MapView, {Marker} from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TripObj, TripPoint} from '../../utils/tripTypes';

export const AddPointScreen: React.FC<AddPointScreenProps> = ({
  navigation,
  route,
}: AddPointScreenProps) => {
  const tripId = route.params.id;
  const [markerState, setMarkerState] = useState<TripPoint>({
    position: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    pointName: '',
    description: '',
    price: 0,
  });

  const goToTrips = () => {
    navigation.navigate('TripsScreen');
  };

  const handleSave = async () => {
    const pointsAS = await AsyncStorage.getItem('trip-' + tripId);
    let points: TripPoint[] = [];
    if (pointsAS) {
      points = JSON.parse(pointsAS);
    }
    points.push(markerState);
    await AsyncStorage.setItem('trip-' + tripId, JSON.stringify(points));
    let total = 0;
    points.forEach((p: {price: number}) => {
      total += p.price;
    });
    const tripsAS = await AsyncStorage.getItem('trips');

    let trips: TripObj[] = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    trips.forEach((trip, index) => {
      if (trip.id === tripId) {
        trips[index].price = total;
        trips[index].position.latitude = points[0].position.latitude;
        trips[index].position.longitude = points[0].position.longitude;
      }
    });
    await AsyncStorage.setItem('trips', JSON.stringify(trips));
    goToTrips();
  };

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
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nome do ponto"
        onChangeText={txt => setMarkerState({...markerState, pointName: txt})}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição do local"
        onChangeText={txt => setMarkerState({...markerState, description: txt})}
      />
      <TextInput
        style={styles.input}
        placeholder="Preço"
        onChangeText={txt =>
          setMarkerState({...markerState, price: parseFloat(txt)})
        }
      />
      <TouchableOpacity style={styles.btn} onPress={handleSave}>
        <Text>Salvar Ponto</Text>
      </TouchableOpacity>
    </View>
  );
};
