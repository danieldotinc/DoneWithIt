import React from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Image } from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import ContactSellerForm from '../components/forms/ContactSellerForm';
import ListItem from '../components/lists/ListItem';
import colors from '../config/colors';

const ListingDetailsScreen = ({ route }) => {
  const { title, images, price, id } = route.params;

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 100}>
      <Image style={styles.image} uri={images[0].url} preview={{ uri: images[0].thumbnailUrl }} tint="light" />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.price}>{price}$</AppText>
        <View style={styles.ownerContainer}>
          <ListItem title="Mosh Hamedani" subTitle="5 Listings" image={require('../assets/mosh.jpg')} />
        </View>
        <ContactSellerForm listingId={id} />
      </View>
    </KeyboardAvoidingView>
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
