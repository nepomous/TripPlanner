import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AddTripScreen: undefined;
  TripsScreen: undefined;
  TripPlanScreen: undefined;
  AddPointScreen: {id: number};
};

export type HomeScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Home'
>;
export type AddTripScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddTripScreen'
>;

export type TripsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TripsScreen'
>;
export type TripPlanScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TripPlanScreen'
>;
export type AddPointScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AddPointScreen'
>;
