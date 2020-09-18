import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-community/async-storage';

import Splash from './views/Splash';
import Home from './views/Home';
import Event from './views/Event';
import Profil from './views/Profil';
import Search from './views/Search';
import rootReducer from './redux/rootReducer';
import Login from './views/Login';

const perstConfig = { key: 'root', storage: AsyncStorage };
const persistedReducer = persistReducer(perstConfig, rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

const BottomNavigatore = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={'list'} size={24} color={tintColor} />
        ),
      }),
    },
    Profil: {
      screen: Profil,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={'user'} size={24} color={tintColor} />
        ),
      }),
    },
    Search: {
      screen: Search,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Icon name={'search'} size={24} color={tintColor} />
        ),
      }),
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#7766C6',
    },
  },
);

const AppNavigator = createStackNavigator(
  {
    Splash: { screen: Splash, navigationOptions: { headerShown: false } },
    Home: {
      screen: BottomNavigatore,
      navigationOptions: {
        headerShown: false,
      },
    },
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    Event: { screen: Event, navigationOptions: { headerShown: false } },
  },
  {
    initialRouteName: 'Splash',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} persisor={persistStore}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </Provider>
    );
  }
}
