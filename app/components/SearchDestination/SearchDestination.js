import React from 'react';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

const SearchDestination = () => {
  const handleChangeText = () => {
    console.log('Search text changed.');
  };

  return (
    <SearchBar
      containerStyle={styles.containerStyle}
      inputStyle={styles.inputStyle}
      lightTheme
      clearIcon
      onChangeText={() => handleChangeText()}
      placeholder="Ride Destination"
    />
  );
};

export default SearchDestination;
