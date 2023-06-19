import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import {assets} from './assets';

import {styles} from './styles';
import {TripPlanScreenProps} from '../../Navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TripObj, TripPoint} from '../../utils/tripTypes';

export const TripPlanScreen: React.FunctionComponent<TripPlanScreenProps> = ({
  navigation,
  route,
}: TripPlanScreenProps) => {
  const tripId = route.params.id;
  const [trips, setTrips] = useState<TripObj>();
  const [points, setPoints] = useState<TripPoint[]>([]);

  useEffect(() => {
    const refresh = navigation.addListener('focus', () => {
      loadData();
    });
    return refresh;
  }, [navigation]);

  const goToAddPoint = (id: number) => {
    navigation.navigate('AddPointScreen', {id});
  };

  const loadData = async () => {
    const tripsAS = await AsyncStorage.getItem('trips');
    let trips = [];
    if (tripsAS) {
      trips = JSON.parse(tripsAS);
    }
    let mainTrip = trips.find((x: TripObj) => x.id === tripId);
    setTrips(mainTrip);

    // const pointsAS = await AsyncStorage.getItem('trip-'+id);
    const pointsAS = await AsyncStorage.getItem('trip-' + tripId);
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
          <Text style={styles.tripPlanItemName}>{item.pointName}</Text>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.tripPlanItemPriceWrapper}>
          <Text style={styles.tripPlanItemPrice}>
            R$ {item.price.toFixed(2)}
          </Text>
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
        <TouchableOpacity
          style={styles.addPointButton}
          onPress={() => goToAddPoint(tripId)}>
          <Image source={assets.addPointIcon} />
        </TouchableOpacity>
        <Text style={styles.tripPlanTitle}>{trips?.name}</Text>
        <Text style={styles.tripPlanPrice}>R$ {trips?.price.toFixed(2)}</Text>
      </View>
      <FlatList
        style={styles.flatListWrapper}
        keyExtractor={(item, index) => item?.id.toString()}
        data={points}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingTop: 16,
          paddingLeft: 16,
        }}
      />
    </View>
  );
};
