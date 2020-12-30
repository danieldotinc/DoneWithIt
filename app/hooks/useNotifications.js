import { useEffect } from 'react';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';

import expoPushTokenApi from '../api/expoPushToken';

export default useNotifications = notificationListener => {
  useEffect(() => {
    registerForPushNotifications();

    if (notificationListener) Notifications.addNotificationResponseReceivedListener(notificationListener);
  }, []);

  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const { data: token } = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);
    } catch (error) {
      console.log('Error while getting notification token:', error);
    }
  };
};
