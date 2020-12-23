import React, { useState } from 'react';
import { View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import LoginScreen from './app/screens/LoginScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/screens/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return <ListingEditScreen />;
}
