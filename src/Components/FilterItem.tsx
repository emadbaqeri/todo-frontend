import * as React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useDimensions} from '../Hooks';

interface FilterItemProps {
  label: string;
}

const FilterItem: React.FC<FilterItemProps> = ({label}) => {
  const {width: screenWidth} = useDimensions();

  return (
    <TouchableOpacity
      style={[styles.container, {width: (screenWidth * 25) / 100}]}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: '35%',
    backgroundColor: 'lightblue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FilterItem;
