import React from 'react';
import { View, StyleSheet, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';

const UploadScreen = ({ visible = false, progress = 0, onDone }) => {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar color={colors.primary} progress={progress} width={200} />
        ) : (
          <LottieView
            style={styles.animation}
            autoPlay
            loop={false}
            onAnimationFinish={onDone}
            source={require('../assets/animation/done.json')}
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 150,
  },
});

export default UploadScreen;
