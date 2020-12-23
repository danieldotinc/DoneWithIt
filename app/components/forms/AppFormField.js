import React from 'react';
import { useFormikContext } from 'formik';

import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

const AppFormField = ({ name, ...otherProps }) => {
  const { errors, touched, setFieldTouched, handleChange } = useFormikContext();
  return (
    <>
      <AppTextInput onBlur={() => setFieldTouched(name)} onChangeText={handleChange(name)} {...otherProps} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default AppFormField;
