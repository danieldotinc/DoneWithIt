import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
  const { title, images, price } = route.params;

  return (
    <View>
      <Image style={styles.image} source={{ uri: images[0].url }} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}$</AppText>
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
