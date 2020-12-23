import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { defaultStyles } from '../config/styles';

const AppTextInput = ({ icon, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons size={25} name={icon} color={defaultStyles.colors.medium} style={styles.icon} />}
      <TextInput placeholderTextColor={defaultStyles.colors.medium} style={defaultStyles.textInput} {...otherProps} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: defaultStyles.colors.light,
    padding: 15,
    marginBottom: 10,
    borderRadius: 25,
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;
