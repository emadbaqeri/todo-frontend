import * as React from 'react';
import {View, StyleSheet} from 'react-native';

const ListItemDivider: React.FC = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    height: 4,
    width: '90%',
  },
});

export default ListItemDivider;
