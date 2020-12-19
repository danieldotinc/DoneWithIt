import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = props => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>This jacket is for sale!</AppText>
        <AppText style={styles.price}>100$</AppText>
        <View style={styles.ownerContainer}>
          <ListItem title="Mosh Hamedani" subTitle="5 Listings" image={require('../assets/mosh.jpg')} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
  },
  price: {
    fontSize: 20,
    color: colors.secondary,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  ownerContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
