import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../config/colors';

const ListItemSeperator = () => {
  return <View style={styles.seperator} />;
};

const styles = StyleSheet.create({
  seperator: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: colors.light,
  },
});

export default ListItemSeperator;
