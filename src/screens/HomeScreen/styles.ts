import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  logoTripPlannerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonBackground: {backgroundColor: 'white', padding: 18},
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
  pin: {
    marginVertical: 16,
  },
  arrow: {
    marginTop: 16,
  },
  buttonEmptyStateBackground: {
    backgroundColor: 'white',
    padding: 18,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEmptyStateText: {
    textAlign: 'center',
    fontSize: 18,
    width: 220,
  },
});
