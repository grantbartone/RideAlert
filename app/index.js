import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

EStylesheet.build({
  $primaryBlue: '#4F6D7A',
});

export default () => <Home />;
