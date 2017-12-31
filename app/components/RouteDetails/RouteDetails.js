import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const RouteDetails = ({ destination }) => {
  const handleClosePress = () => console.log('handleClosePress');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.closeButton} onPress={() => handleClosePress()}>
        <View style={styles.closeWrapper}>
          <Text style={styles.closeText}>X</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.routeWrapper}>
        <Text style={styles.routeText}>To: { destination.address}</Text>
        <Text style={styles.routeText}>From: Current Location</Text>
      </View>
    </View>
  );
};

RouteDetails.propTypes = {
  destination: PropTypes.object,
};

export default RouteDetails;
