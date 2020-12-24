import React, { useState } from 'react';
import { View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/lists/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <>
      {/* <ListItem
        title="Daniel Devman"
        subTitle="danieldevman@gmail.com"
        image={require('./app/assets/daniel2.jpeg')}
        showChevrons
      />
      <ListItem
        title="Mosh Hamedani"
        subTitle="codewithmosh@gmail.com"
        image={require('./app/assets/mosh.jpg')}
        showChevrons
      />
      <ListItem
        title="Daniel Daneshi"
        subTitle="danieldaneshi@gmail.comdanieldaneshi@gmail.comdanieldaneshi@gmail.comdanieldaneshi@gmail.comdanieldaneshi@gmail.comdanieldaneshi@gmail.comdanieldaneshi@gmail.com"
        image={require('./app/assets/daniel1.jpeg')}
        showChevrons
      />
      <ListItem title="Trul" subTitle="trul@gmail.com" image={require('./app/assets/trul.png')} showChevrons /> */}
      <ListingEditScreen />
      {/* <MessagesScreen /> */}
    </>
  );
}
