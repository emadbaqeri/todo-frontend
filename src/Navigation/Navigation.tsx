import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Details, Home} from '../Screens';

interface RoutesProps {}

const RootStack = createStackNavigator();

export const Navigation: React.FC<RoutesProps> = () => {
  const {Navigator, Screen} = RootStack;
  return (
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
      </Navigator>
    </NavigationContainer>
  );
};
