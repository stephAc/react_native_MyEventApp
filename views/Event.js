import React, { Component } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Button,
  Linking,
} from 'react-native';
import { connect } from 'react-redux';

import Title from '../components/Title';
import { updateFavoris } from '../redux/actions/favoris.actions';

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.navigation.state.params.data,
      shortDescription: null,
      description: null,
      isFavoris: false,
    };
  }

  componentDidMount() {
    let { description } = this.state.data;
    let shortDescription =
      description.replace(/(<([^>]+)>)/gi, '').substr(0, 300) + '...';
    description = description.replace(/(<([^>]+)>)/gi, '');

    let isFavoris = false;
    let { favoris } = this.props;
    let { data } = this.state;

    if (favoris.includes(data.id)) isFavoris = true;

    this.setState({ shortDescription, description });
  }

  openDescription() {
    this.setState({ shortDescription: this.state.description });
  }

  goToLink() {
    let { url } = this.state.data;
    if (Linking.canOpenURL(url)) {
      Linking.openURL(url);
    }
  }

  addOrDeleteFavoris() {
    let { favoris } = this.props;
    let { id } = this.state.data;

    favoris.includes(id)
      ? favoris.splice(favoris.indexOf(id), 1)
      : favoris.push(id);

    this.setState({ isFavoris: !!favoris.includes(id) });

    this.props.updateFavoris(favoris);
  }

  render() {
    let {
      cover_url,
      title,
      category,
      date_start,
      contact_name,
      contact_phone,
    } = this.state.data;
    let { shortDescription, isFavoris } = this.state;

    return (
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{ uri: cover_url }}
          style={styles.headerImage}
          resizeMode={'cover'}
        />
        <View style={styles.body}>
          <Title title={title} />
          <View></View>
          <Text>A propos</Text>
          <Text onPress={() => this.openDescription()}>{shortDescription}</Text>
          <Text>Organisateur</Text>
          <Text>{contact_name}</Text>
          <Text>{contact_phone}</Text>

          <Button
            title={isFavoris ? 'Supprimer des favoris' : 'Ajouter aux favoris'}
            onPress={() => this.addOrDeleteFavoris()}
          />

          <Button title="Réservation" onPress={() => this.goToLink()} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  headerImage: {
    height: 250,
  },
  body: {
    flex: 1,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 10,
    marginTop: -30,
  },
  title: {
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
});

// Getter for store state
const mapStateToProps = (state) => {
  return {
    favoris: state.favoris,
  };
};

// Setter for store state
const mapDispatchToPropos = (dispatch) => {
  return {
    updateFavoris: (favoris) => {
      dispatch(updateFavoris(favoris));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToPropos)(Event);
