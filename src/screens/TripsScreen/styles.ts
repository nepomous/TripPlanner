import {Dimensions, StyleSheet} from 'react-native';

const screenDimensions = Dimensions.get('window');

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    backgroundColor: 'blue',
  },
  mapWrapper: {
    flex: 1,
  },
  tripWrapper: {
    backgroundColor: 'white',
    padding: 16,
  },
  tripImage: {
    backgroundColor: 'green',
    width: screenDimensions.width - 32,
    height: 144,
    marginBottom: 6,
  },
  tripPrice: {
    position: 'absolute',
    top: 144 - 32,
    right: 32,
    textAlign: 'right',
    backgroundColor: '#1C74BC',
    padding: 4,
    color: 'white',
  },
  addTripButton: {
    position: 'absolute',
    bottom: 0,
    right: 20,
    padding: 10,
  },
});
