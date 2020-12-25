import React from 'react';
import { useFormikContext } from 'formik';

import { ErrorMessage } from '.';
import ImageInputList from '../ImageInputList';

const FormImagePicker = ({ name }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();
  const uris = values[name];

  const handleAddImage = imageUri => {
    setFieldValue(name, [...uris, imageUri]);
  };

  const handleRemoveImage = imageUri => {
    setFieldValue(
      name,
      uris.filter(item => item !== imageUri)
    );
  };

  return (
    <>
      <ImageInputList imageUris={uris} onAddImage={handleAddImage} onRemoveImage={handleRemoveImage} />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default FormImagePicker;
