import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Trips} from './Trip';
import {styles} from './styles';

export const TripsScreen: React.FunctionComponent = ({navigation}) => {
  const trips = [
    {id: '1', name: 'Eurotrip 2023', price: '2222'},
    {id: '2', name: 'Latam trip 2023', price: '3000'},
  ];

  const goToTripPlan = () => {
    navigation.navigate('TripPlan');
  };

  return (
    <View style={styles.screenWrapper}>
      <View style={styles.mapWrapper}>
        <Text>Mapa</Text>
      </View>
      <FlatList
        data={trips}
        renderItem={({item}) => (
          <Trips onPress={goToTripPlan} title={item.name} price={item.price} />
        )}
        horizontal
        style={{flexGrow: 0}}
        pagingEnabled
        keyExtractor={item => item.id}
      />
    </View>
  );
};
