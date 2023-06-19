import React, {useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Trips} from './Trip';
import {styles} from './styles';
import {isIphone} from '../../utils/isIphone';
import MapView from 'react-native-maps';
import {assets} from './assets';
import {TripsScreenProps} from '../../Navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TripObj} from '../../utils/tripTypes';

export const TripsScreen: React.FunctionComponent<TripsScreenProps> = ({
  navigation,
}: TripsScreenProps) => {
  const [trips, setTrips] = useState<TripObj[]>([]);

  const goToTripPlan = (id: number) => {
    navigation.navigate('TripPlanScreen', {id});
  };

  const goToAddTrip = () => {
    navigation.navigate('AddTripScreen');
  };

  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      loadData();
    });

    return refresh;
  }, [navigation]);

  const loadData = async () => {
    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    setTrips(trips);
  };
  return (
    <View style={styles.screenWrapper}>
      <View style={styles.mapWrapper}>
        <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <TouchableOpacity style={styles.addTripButton} onPress={goToAddTrip}>
          <Image source={assets.addTripIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={trips}
        renderItem={({item}) => (
          <Trips
            onPress={() => goToTripPlan(item.id)}
            title={item.name}
            price={item.price.toString()}
          />
        )}
        horizontal
        style={[{flexGrow: 0}, isIphone() ? {marginBottom: 20} : null]}
        pagingEnabled
        keyExtractor={item => item?.id?.toString()}
      />
    </View>
  );
};
