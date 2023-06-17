import {createStackNavigator} from '@react-navigation/stack';
import {RootStackParamList} from './types';
import {HomeScreen} from '../screens/HomeScreen';
import {TripsScreen} from '../screens/TripsScreen';
import {TripPlanScreen} from '../screens/TripPlanScreen';
import {AddTripScreen} from '../screens/AddTripScreen';
import {AddPointScreen} from '../screens/AddPointScreen';

const AppNavigator = createStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <AppNavigator.Navigator initialRouteName="Home">
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
      <AppNavigator.Screen
        name="AddPointScreen"
        component={AddPointScreen}
        options={{headerShown: false}}
      />
    </AppNavigator.Navigator>
  );
};
