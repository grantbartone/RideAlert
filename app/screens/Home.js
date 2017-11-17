import React, { Component } from 'react';
import { StatusBar, Keyboard, Platform, Animated, Easing } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { SearchDestination } from '../components/SearchDestination';

const ANIMATION_DURATION = 500;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetY: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    const name = Platform.OS === 'ios' ? 'Will' : 'Did';
    this.keyboardDidShowListener = Keyboard.addListener(
      `keyboard${name}Show`,
      this.keyboardWillShow,
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      `keyboard${name}Hide`,
      this.keyboardWillHide,
    );
  };

  componentWillUnmount = () => {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  };

  keyboardWillShow = () => {
    console.log('Keyboard showing.');
    Animated.timing(this.state.offsetY, {
      toValue: -210,
      duration: ANIMATION_DURATION,
      easing: Easing.bezier(0.23, 1, 0.32, 1),
    }).start();
  };

  keyboardWillHide = () => {
    console.log('Keyboard hiding.');
    Animated.timing(this.state.offsetY, {
      toValue: 0,
      duration: ANIMATION_DURATION,
      easing: Easing.bezier(0.23, 1, 0.32, 1),
    }).start();
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Animated.View
          style={{
            transform: [{ translateY: this.state.offsetY }],
            width: '100%',
            alignItems: 'center',
          }}
        >
          <Logo />
          <SearchDestination />
        </Animated.View>
      </Container>
    );
  }
}

export default Home;
