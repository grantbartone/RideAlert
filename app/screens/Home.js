import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

class Home extends Component {
  handleChangeText = () => {
    console.log('Search text changed.');
  };

  render () {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        {/* <SearchBar
          lightTheme
          onChangeText={this.handleChangeText}
          placeholder='Ride Destination' /> */}
      </Container>
    );
  }
}

export default Home;
