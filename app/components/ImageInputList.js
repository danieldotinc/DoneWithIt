import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ImageInput from './ImageInput';

const ImageInputList = ({ imageUris = [], onAddImage, onRemoveImage }) => {
  const scrollView = useRef();

  return (
    <View>
      <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map(imageUri => (
            <View style={styles.image} key={imageUri}>
              <ImageInput imageUri={imageUri} onChangeImage={() => onRemoveImage(imageUri)} />
            </View>
          ))}
          <ImageInput onChangeImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  image: {
    marginRight: 10,
  },
});

export default ImageInputList;
