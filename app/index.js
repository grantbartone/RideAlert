import React from 'react';
import EStylesheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';
// import Rides from './screens/Rides';
// import ridesData from './data/rides.json';

EStylesheet.build({
  $primaryRed: '#E74C3C',
  $white: '#FFFFFF',
  $border: '#E2E2E2',
  // $outline: 1,
});

// export default () => <Rides destination={ridesData.destination} />;
export default () => <Home />;
