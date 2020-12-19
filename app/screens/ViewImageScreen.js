import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet, SafeAreaView, Image } from 'react-native';

import colors from '../config/colors';

const ViewImageScreen = props => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.deleteBox}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
      <View style={styles.closeBox}>
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <Image resizeMode="contain" style={styles.pic} source={require('../assets/chair.jpg')} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.black,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deleteBox: {
    left: 30,
  },
  closeBox: {
    right: 30,
  },
  pic: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    height: '100%',
  },
});

export default ViewImageScreen;
