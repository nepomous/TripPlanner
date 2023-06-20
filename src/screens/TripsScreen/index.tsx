import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Trips} from './Trip';
import {styles} from './styles';
import {isIphone} from '../../utils/isIphone';
import MapView from 'react-native-maps';
import {assets} from './assets';
import {TripsScreenProps} from '../../Navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TripObj} from '../../utils/tripTypes';
import {regionFrom} from '../../utils/regionFrom';

export const TripsScreen: React.FunctionComponent<TripsScreenProps> = ({
  navigation,
}: TripsScreenProps) => {
  const mapRef = useRef<MapView>(null);
  const viewConfigRef = useRef({itemVisiblePercentThreshold: 50});
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

  const onViewCallBack = useCallback((info: any) => {
    const {viewableItems} = info;
    if (viewableItems && viewableItems.length > 0) {
      const [item] = viewableItems;
      mapRef.current?.animateToRegion(
        regionFrom(
          item.item.position.latitude,
          item.item.position.longitude,
          2000,
        ),
      );
    }
  }, []);

  const viewabilityConfigCallbackPairs = useRef([
    {onViewableItemsChanged: onViewCallBack},
  ]);

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
          ref={mapRef}
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
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewConfigRef.current}
      />
    </View>
  );
};
