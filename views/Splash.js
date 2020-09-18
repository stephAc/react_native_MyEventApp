import React, { Component } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

import Logo from '../assets/logo.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: new Animated.Value(0),
    };
  }

  fadeInAnimation = () => {
    Animated.timing(this.state.fadeIn, {
      toValue: 1,
      duration: 2000,
    }).start(() => this.props.navigation.navigate('Login'));
  };

  componentDidMount() {
    this.fadeInAnimation();
  }

  render() {
    let { fadeIn } = this.state;

    return (
      <View style={styles.container}>
        <Animated.Image style={{ opacity: fadeIn }} source={Logo} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
