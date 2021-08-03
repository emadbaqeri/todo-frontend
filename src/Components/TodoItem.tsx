import * as React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';

interface TodoItemProps {
  label: string;
  id: string;
}

const TodoItem: React.FC<TodoItemProps> = ({label}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details')}
      style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: '95%',
    backgroundColor: 'tomato',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: '10%',
    justifyContent: 'center',
  },
});

export default TodoItem;
