import 'react-native-gesture-handler';
import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux';
import {enableScreens} from 'react-native-screens';

import {Navigation} from './src/Navigation/Navigation';

enableScreens();
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
