import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native';

import DateBox from './DateBox';
import Helpers from '../helpers/Helpers';

export default class EventBox extends Component {
  details() {
    let { navigation, data } = this.props;
    navigation.navigate('Event', { data });
  }

  render() {
    let { cover_url, title, category, date_start } = this.props.data;
    let { horizontal } = this.props;

    return (
      <TouchableOpacity onPress={() => this.details()}>
        <View
          style={[styles.container, horizontal && styles.containerHorizontal]}
        >
          <Image
            source={{ uri: cover_url }}
            style={styles.headerImage}
            resizeMode={'cover'}
          />
          <View style={styles.body}>
            <DateBox
              style={styles.datebox}
              day={Helpers.extracDayFromDate(date_start)}
              month={Helpers.extracMonthFromDate(date_start)}
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>
              {Helpers.extracParentCategory(category)}
            </Text>
            <Text style={styles.subtitle}>{date_start}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginBottom: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 5,
  },
  containerHorizontal: {
    width: 350,
  },
  headerImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 120,
    width: '100%',
  },
  body: {
    display: 'flex',
    justifyContent: 'center',
    height: 150,
    backgroundColor: '#FFF',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
  },
  datebox: {
    position: 'absolute',
    left: 10,
    top: -30,
  },
});
