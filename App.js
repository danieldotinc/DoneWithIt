import React, { useState } from 'react';
import { View } from 'react-native';
import AppPicker from './app/components/AppPicker';
import AppTextInput from './app/components/AppTextInput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/screens/Screen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

const categories = [
  {
    label: 'Furniture',
    value: 1,
  },
  {
    label: 'Clothing',
    value: 2,
  },
  {
    label: 'Cameras',
    value: 3,
  },
];

export default function App() {
  const [selectedItem, setSelectedItem] = useState(categories[0]);
  return (
    <Screen>
      <AppPicker
        icon="apps"
        items={categories}
        selectedItem={selectedItem}
        onSelectedItem={item => setSelectedItem(item)}
        placeholder="Category"
      />
      <AppTextInput icon="email" placeholder="Username" />
    </Screen>
  );
}
