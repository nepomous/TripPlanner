import {Dimensions, Platform} from 'react-native';

export const isIphone = () => {
  const dim = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTV &&
    ((dim.height === 812 && dim.width === 375) ||
      (dim.width === 812 && dim.height === 375))
  );
};
