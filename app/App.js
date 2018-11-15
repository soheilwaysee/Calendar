import React from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';
import getTheme from '../native-base-theme/components';
import configureStore from './redux/configureStore';
import material from '../native-base-theme/variables/material';
import RootNavigation from './RootNavigation';

const store = configureStore();

const App = () => (
  <StyleProvider style={getTheme(material)}>
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  </StyleProvider>
);

export default App;
