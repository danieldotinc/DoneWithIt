import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../../config/colors';

const ListItemSeparator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: colors.light,
  },
});

export default ListItemSeparator;
