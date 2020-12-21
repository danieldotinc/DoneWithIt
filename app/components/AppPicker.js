import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { defaultStyles } from '../config/styles';
import AppText from './AppText';
import Screen from '../screens/Screen';
import PickerItem from './PickerItem';

const AppPicker = ({ icon, items, selectedItem, placeholder, onSelectedItem }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons size={25} name={icon} color={defaultStyles.colors.medium} style={styles.icon} />
          )}
          <AppText style={styles.text}>{selectedItem.label ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons size={25} name="chevron-down" color={defaultStyles.colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={item => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
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
  text: {
    flex: 1,
  },
});

export default AppPicker;
