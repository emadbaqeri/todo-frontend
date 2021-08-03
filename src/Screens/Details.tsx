import * as React from 'react';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationParams,
} from 'react-navigation';
import {Text} from 'react-native';

interface DetailsProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

const Details: React.FC<DetailsProps> = () => {
  return <Text>something here as Details page</Text>;
};

export default Details;
