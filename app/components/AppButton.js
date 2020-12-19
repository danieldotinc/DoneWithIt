import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from '../config/colors';

const AppButton = ({ title, onPress, color = 'primary' }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: colors[color] }]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    width: '100%',
  },
  title: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default AppButton;
