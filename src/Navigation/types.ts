import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  AddTripScreen: undefined;
  TripsScreen: undefined;
  TripPlanScreen: undefined;
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
