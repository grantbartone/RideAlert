import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const Logo = () => (
  <View style={styles.container}>
    <Text style={styles.headertext}>RIDE ALERT</Text>
    <Image source={require('./images/siren.gif')} resizeMode='contain' style={styles.logo} />
    <Text style={styles.text}>Have your ride show up when you do.</Text>
  </View>
);

export default Logo;
