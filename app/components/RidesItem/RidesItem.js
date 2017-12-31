import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import moment from 'moment';
import styles from './styles';

const RidesItem = ({ ride = {}, onPress }) => {
  const centsToDollars = cents => (cents / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const waitTime = Math.floor(Math.random() * 8) + 1; // TODO: Get waitTime from API
  const minsDuration = Math.floor(ride.estimated_duration_seconds / 60);
  const arrivalTime = moment().add(minsDuration + waitTime, 'minutes').format('LT');

  const waitTimeString = `${waitTime} min wait | ${arrivalTime}`;
  const titleString = `${ride.display_name} - ${minsDuration} min`;

  // FIXME: Move hard-coded underlayColor to EStyleSheet constant
  return (
    <ListItem
      style={styles.container}
      roundAvatar
      avatar={require('../Logo/images/siren.gif')}
      title={titleString}
      subtitle={waitTimeString}
      rightTitle={centsToDollars(ride.estimated_cost_cents_max)}
      onPress={onPress}
      underlayColor="#E2E2E2"
    />
  );
};

RidesItem.propTypes = {
  ride: PropTypes.object,
  onPress: PropTypes.func,
};

export default RidesItem;
