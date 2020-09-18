import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Title extends Component {
  render() {
    let { title } = this.props;
    return <Text style={styles.title}>{title}</Text>;
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
  },
});
