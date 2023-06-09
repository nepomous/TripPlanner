import React from 'react';
import {FlatList, Text, View, Image, TouchableOpacity} from 'react-native';
import {assets} from './assets';

import {styles} from './styles';

export const TripPlanScreen: React.FunctionComponent = ({navigation}) => {
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

  const renderItem = ({item}) => {
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
