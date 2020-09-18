import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class DateBox extends Component {
  render() {
    let { day, month } = this.props;

    return (
      <View style={[styles.container, { ...this.props.style }]}>
        <Text style={styles.day}>{day}</Text>
        <Text style={styles.month}>{month}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 15,
  },
  day: {
    fontSize: 22,
    color: '#7766',
    fontWeight: 'bold',
  },
  month: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
  },
});
