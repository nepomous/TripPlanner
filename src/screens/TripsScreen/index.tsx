import React from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {Trips} from './Trip';
import {styles} from './styles';
import {isIphone} from '../../utils/isIphone';
import MapView from 'react-native-maps';
import {assets} from './assets';
import {TripsScreenProps} from '../../Navigation/types';

export const TripsScreen: React.FunctionComponent<TripsScreenProps> = ({
  navigation,
}: TripsScreenProps) => {
  const trips = [
    {id: '1', name: 'Eurotrip 2023', price: '2222'},
    {id: '2', name: 'Latam trip 2023', price: '3000'},
  ];

  const goToTripPlan = () => {
    navigation.navigate('TripPlanScreen');
  };

  const goToAddTrip = () => {
    navigation.navigate('AddTripScreen');
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
        <TouchableOpacity onPress={goToAddTrip}>
          <Image source={assets.addTripIcon} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={trips}
        renderItem={({item}) => (
          <Trips onPress={goToTripPlan} title={item.name} price={item.price} />
        )}
        horizontal
        style={[{flexGrow: 0}, isIphone() ? {marginBottom: 20} : null]}
        pagingEnabled
        keyExtractor={item => item.id}
      />
    </View>
  );
};
