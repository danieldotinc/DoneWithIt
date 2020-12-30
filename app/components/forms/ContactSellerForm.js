import React from 'react';
import { View, StyleSheet, Keyboard, Alert } from 'react-native';
import * as Yup from 'yup';
import * as Notifications from 'expo-notifications';

import { AppForm, AppFormField, SubmitButton } from '.';
import messagesApi from '../../api/messages';

const validationSchema = Yup.object().shape({
  message: Yup.string().required().min(1).max(500).label('Message'),
});

const ContactSellerForm = ({ listingId }) => {
  handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listingId);
    if (!result.ok) {
      console.log('Error while contacting the seller!', result);
      Alert.alert('Error', "Couldn't send the message to the seller");
    }

    resetForm();
    Notifications.scheduleNotificationAsync({
      content: { title: 'Awesome!', body: 'Your message was sent to the seller' },
      trigger: {
        seconds: 1,
      },
    });
  };

  return (
    <View style={styles.container}>
      <AppForm initialValues={{ message: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
        <AppFormField name="message" placeholder="Message..." />
        <SubmitButton title="Contact Seller" />
      </AppForm>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
