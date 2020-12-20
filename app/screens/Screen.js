import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { statusBarHeight } from 'expo-constants';

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: statusBarHeight,
    flex: 1,
  },
});

export default Screen;
