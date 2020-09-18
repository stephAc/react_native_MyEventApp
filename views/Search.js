import React, { Component } from 'react';
import { FlatList, TextInput, View, StyleSheet, Image } from 'react-native';

import EventsService from '../services/events.service';
import SearchIcon from '../assets/search.png';
import EventBox from '../components/EventBox';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }

  async searchEvent(text) {
    let events =
      text.length > 2 ? await EventsService.getEventsByName(20, text) : [];
    this.setState({ events });
  }

  render() {
    let { events } = this.state;
    let { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image source={SearchIcon} style={styles.inputSearch} />
          <TextInput
            style={{ width: '100%' }}
            placeholder="Rechercher un event ?"
            onChangeText={(text) => this.searchEvent(text)}
          />
        </View>
        <FlatList
          data={events}
          backgroundColor={'#FFF'}
          keyExtractor={(item) => item.fields.id}
          renderItem={({ item }) => (
            <EventBox data={item.fields} navigation={navigation} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    flex: 1,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 70,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  inputSearch: {
    marginLeft: 20,
    marginRight: 10,
    width: 25,
    height: 25,
  },
});
