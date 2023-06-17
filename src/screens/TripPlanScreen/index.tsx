import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import {assets} from './assets';

import {styles} from './styles';
import {TripPlanScreenProps} from '../../Navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const TripPlanScreen: React.FunctionComponent<TripPlanScreenProps> = ({
  navigation,
}: TripPlanScreenProps) => {
  const [trips, setTrips] = useState([]);
  const [points, setPoints] = useState([]);
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
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    setTrips(trips);

    const pointsAS = await AsyncStorage.getItem('trip-');
    let points = [];
    if (pointsAS) {
      points = JSON.parse(pointsAS);
    }
    setPoints(points);
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.tripPlanItemWrapper}>
        <View style={{flex: 1}}>
          <Text style={styles.tripPlanItemName}>{item.name}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.tripPlanItemPriceWrapper}>
          <Text style={styles.tripPlanItemPrice}>{item.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.photoWrapper}>
        <View style={styles.backButtonWrapper}>
          <TouchableOpacity onPress={navigation.goBack}>
            <Image source={assets.arrowLeft} />
          </TouchableOpacity>
        </View>
        <Text style={styles.tripPlanTitle}>{trip.name}</Text>
        <Text style={styles.tripPlanPrice}>{trip.price}</Text>
      </View>
      <FlatList
        style={styles.flatListWrapper}
        keyExtractor={item => item.id}
        data={trip.places}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingTop: 16,
          paddingLeft: 16,
        }}
      />
    </View>
  );
};
