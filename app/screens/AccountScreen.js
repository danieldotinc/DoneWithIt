import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import colors from '../config/colors';
import Screen from '../components/Screen';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <Screen style={styles.background}>
      <View style={styles.container}>
        <ListItem title="Mosh Hamedani" subTitle="codewithmosh@gmail.com" image={require('../assets/mosh.jpg')} />
      </View>

      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={item => item.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      </View>

      <View style={styles.container}>
        <ListItem title="Logout" IconComponent={<Icon name="logout" backgroundColor={colors.warning} />} />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 10,
  },
});

export default AccountScreen;
