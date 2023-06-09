import React from 'react';
import {HomeScreen} from './src/screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {TripsScreen} from './src/screens/TripsScreen';
import {TripPlanScreen} from './src/screens/TripPlanScreen';
import {AddTripScreen} from './src/screens/AddTripScreen';

const AppNavigator = createStackNavigator();

const Navigation = () => {
  return (
    <AppNavigator.Navigator initialRouteName="Trips">
      <AppNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <AppNavigator.Screen
        name="Trips"
        component={TripsScreen}
        options={{headerShown: false}}
      />
      <AppNavigator.Screen
        name="TripPlan"
        component={TripPlanScreen}
        options={{headerShown: false}}
      />
      <AppNavigator.Screen
        name="AddTrip"
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
