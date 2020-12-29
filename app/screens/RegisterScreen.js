import React from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms';
import { useState } from 'react/cjs/react.development';
import useAuth from '../auth/useAuth';
import usersApi from '../api/users';
import authApi from '../api/auth';
import useApi from '../hooks/useApi';
import AppActivityIndicator from '../components/AppActivityIndicator';

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

const RegisterScreen = () => {
  const loginApi = useApi(authApi.login);
  const registerApi = useApi(usersApi.register);

  const auth = useAuth();
  const [error, setError] = useState();

  const handleRegister = async userInfo => {
    const result = await registerApi.request(userInfo);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError('An unexpected error occurred');
        console.log(result);
      }
      return;
    }

    setError(false);
    const { data: authToken } = await loginApi.request(userInfo.email, userInfo.password);
    auth.login(authToken);
  };

  return (
    <>
      <AppActivityIndicator visible={loginApi.loading || registerApi.loading} />
      <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <ErrorMessage error={error} visible={!!error} />
        <AppForm
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={handleRegister}
          validationSchema={validationSchema}
        >
          <AppFormField autoCorrect={false} icon="account" name="name" placeholder="Name" />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardType="email-address"
            name="email"
            placeholder="Email"
            textContentType="emailAddress"
          />
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            name="password"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <SubmitButton title="Register" />
        </AppForm>
      </Screen>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 50,
  },
});

export default RegisterScreen;
