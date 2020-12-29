import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = 'authToken';

const storeToken = async token => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log('Error while storing a token:', error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log('Error while removing a token:', error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log('Error while getting a token:', error);
  }
};

export default {
  storeToken,
  removeToken,
  getUser,
  getToken,
};
