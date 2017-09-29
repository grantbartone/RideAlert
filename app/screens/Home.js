import React, { Component } from 'react';
import { StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { SearchDestination } from '../components/SearchDestination';

class Home extends Component {
  render () {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <SearchDestination />
      </Container>
    );
  }
}

export default Home;
