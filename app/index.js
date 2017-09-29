import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStylesheet.build({
  $primaryRed: '#E74C3C',
  $white: '#FFFFFF',
  // outline: 1,
});

export default () => <Home />;
