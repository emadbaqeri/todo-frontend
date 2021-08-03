import {Dimensions} from 'react-native';

const useDimensions = (): {height: number; width: number} => {
  return {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  };
};

export default useDimensions;
