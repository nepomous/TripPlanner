import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    paddingTop: 120,
  },
  photoWrapper: {height: 192, backgroundColor: 'grey'},
  tripPlanTitle: {
    position: 'absolute',
    left: 16,
    bottom: 16,
  },
  tripPlanPrice: {
    position: 'absolute',
    bottom: 16,
    right: 32,
    textAlign: 'right',
    backgroundColor: '#1C74BC',
    padding: 4,
    color: 'white',
  },
  flatListWrapper: {
    flex: 1,
  },
  backButtonWrapper: {
    position: 'absolute',
    top: 26,
    left: 16,
    padding: 10,
  },
  tripPlanItemWrapper: {flex: 1, flexDirection: 'row', paddingBottom: 16},
  tripPlanItemPriceWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 16,
  },
  tripPlanItemPrice: {textAlign: 'right', color: '#1C74BC', fontWeight: 'bold'},
  tripPlanItemName: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  input: {
    backgroundColor: '#E5E5E5',
    padding: 20,
    marginBottom: 16,
  },
  btn: {
    backgroundColor: '#E5E5E5',
    padding: 20,
    marginBottom: 16,
  },
});
