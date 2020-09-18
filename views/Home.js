import React, { Component } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import Title from '../components/Title';
import EventBox from '../components/EventBox';
import { FlatList } from 'react-native-gesture-handler';

import EventsService from '../services/events.service';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eventsAfter: [],
      eventsWeek: [],
    };
  }

  async componentDidMount() {
    let eventsWeek = await EventsService.getEventsThisWeek(10);
    let eventsAfter = await EventsService.getEventsAfter();
    this.setState({ eventsAfter, eventsWeek });
  }

  render() {
    let { eventsWeek, eventsAfter } = this.state;
    let { navigation } = this.props;
    return (
      <ScrollView style={styles.container}>
        <Title title={'Ce week-end'} />
        <FlatList
          data={eventsWeek}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          backgroundColor={'#FFF'}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <EventBox
              navigation={navigation}
              data={item.fields}
              horizontal={true}
            />
          )}
        />
        <Title title={'A venir'} />
        <FlatList
          data={eventsAfter}
          showsHorizontalScrollIndicator={false}
          backgroundColor={'#FFF'}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <EventBox data={item.fields} />}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 70,
  },
});
