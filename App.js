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
import ImageInputList from './app/components/ImageInputList';
import ImageInput from './app/components/ImageInput';
import AuthNavigator from './app/navigation/AuthNavigator';

import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
