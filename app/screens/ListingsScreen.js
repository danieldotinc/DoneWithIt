import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import Screen from '../components/Screen';
import routes from '../navigation/routes';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import AppActivityIndicator from '../components/AppActivityIndicator';
import useApi from '../hooks/useApi';

const ListingsScreen = ({ navigation }) => {
  const { data: listings, error, loading, request: loadListings } = useApi(listingsApi.getListings);

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <Screen style={styles.screen}>
        {error && (
          <View style={styles.error}>
            <AppText>Couldn't load the listings.</AppText>
            <AppButton title="Retry" onPress={loadListings} />
          </View>
        )}
        {!error && (
          <FlatList
            data={listings}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                subTitle={'$' + item.price}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                thumbnailUrl={item.images[0].thumbnailUrl}
              />
            )}
          />
        )}
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
    padding: 20,
    paddingBottom: 0,
    paddingTop: 0,
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ListingsScreen;
