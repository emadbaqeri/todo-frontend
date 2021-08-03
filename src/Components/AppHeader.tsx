import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Feather';

interface HeaderProps {
  title: string;
  onAddPress: () => void;
}

const AppHeader: React.FC<HeaderProps> = ({title, onAddPress}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity
        onPress={onAddPress}
        style={styles.touchableIconContainer}>
        <Icon name="plus" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '8%',
    width: '100%',
    backgroundColor: 'lightskyblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
    color: '#000',
  },
  touchableIconContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '20%',
  },
});

export default AppHeader;
