import React from 'react';
import {HomeScreen} from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {TripsScreen} from './src/screens/TripsScreen';
import {TripPlanScreen} from './src/screens/TripPlanScreen';
import {AddTripScreen} from './src/screens/AddTripScreen';
import {RootStackParamList} from './src/Navigation/types';

const AppNavigator = createStackNavigator<RootStackParamList>();

const Navigation = () => {
  return (
    <AppNavigator.Navigator initialRouteName="TripsScreen">
      <AppNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <AppNavigator.Screen
        name="TripsScreen"
        component={TripsScreen}
        options={{headerShown: false}}
      />
      <AppNavigator.Screen
        name="TripPlanScreen"
        component={TripPlanScreen}
        options={{headerShown: false}}
      />
      <AppNavigator.Screen
        name="AddTripScreen"
        component={AddTripScreen}
        options={{headerShown: false}}
      />
    </AppNavigator.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
