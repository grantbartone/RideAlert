import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';

import styles from './styles';

class SearchDestination extends Component {
  handleChangeText = () => {
    console.log('Search text changed.');
  };

  render() {
    return (
      <SearchBar
        containerStyle={styles.containerStyle}
        inputStyle={styles.inputStyle}
        lightTheme
        clearIcon
        onChangeText={this.handleChangeText}
        placeholder="Ride Destination"
      />
    );
  }
}

export default SearchDestination;
