import React, { useEffect } from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

const ImageInput = ({ imageUri, onChangeImage }) => {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) alert('You need to enable permissions to access to the photo library for this app');
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    else handleDelete();
  };

  const selectImage = async () => {
    try {
      const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });

      if (!cancelled) onChangeImage(uri);
    } catch (error) {
      console.log('Error on getting the image: ', error);
    }
  };

  const handleDelete = () => {
    Alert.alert('Delete Image', 'Are you sure you want to delete this image?', [
      { text: 'Yes', onPress: () => onChangeImage(null) },
      { text: 'No' },
    ]);
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {!imageUri && <MaterialCommunityIcons name="camera" size="40" color={colors.medium} />}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.light,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageInput;
