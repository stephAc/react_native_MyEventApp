import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

export default class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Text style={styles.title}>{this.props.title}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    color: 'red',
  },
});
