import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class FlexView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.box}>1</Text>
        </View>
        <View>
          <Text style={styles.box}>2</Text>
        </View>
        <View>
          <Text style={styles.box}>3</Text>
        </View>
        <View>
          <Text style={styles.box}>4</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 70,
  },

  box: {
    width: 70,
    borderWidth: 1,
  },
});
