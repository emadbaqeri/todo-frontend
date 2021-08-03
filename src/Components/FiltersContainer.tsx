import * as React from 'react';
import {View, StyleSheet} from 'react-native';

import {FilterItem} from '.';

const filters = [
  {id: Math.random().toString(), title: 'todo'},
  {id: Math.random().toString(), title: 'completed'},
  {id: Math.random().toString(), title: 'in-progress'},
];

const FiltersContainer: React.FC = () => {
  return (
    <View style={styles.container}>
      {filters.map(item => {
        return <FilterItem key={item.id} label={item.title} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 50,
    width: '95%',
    marginRight: 'auto',
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default FiltersContainer;
