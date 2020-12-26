import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';
import listingsApi from '../api/listings';
import CategoryPickerItem from '../components/CategoryPickerItem';

import { AppForm, AppFormField, SubmitButton, AppFormPicker } from '../components/forms';
import FormImagePicker from '../components/forms/FormImagePicker';
import Screen from '../components/Screen';
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image.'),
});

const categories = [
  { label: 'Furniture', value: 1, icon: 'floor-lamp', backgroundColor: '#fc5c65' },
  { label: 'Cars', value: 2, icon: 'car', backgroundColor: '#fd9644' },
  { label: 'Cameras', value: 3, icon: 'camera', backgroundColor: '#fed330' },
  { label: 'Games', value: 4, icon: 'cards', backgroundColor: '#26de81' },
  { label: 'Clothing', value: 5, icon: 'shoe-heel', backgroundColor: '#2bcbba' },
  { label: 'Sports', value: 6, icon: 'basketball', backgroundColor: '#45aaf2' },
  { label: 'Movies & Music', value: 7, icon: 'headphones', backgroundColor: '#4b7bec' },
  { label: 'Books', value: 8, icon: 'book', backgroundColor: 'purple' },
  { label: 'Other', value: 9, icon: 'folder', backgroundColor: 'grey' },
];

const ListingEditScreen = props => {
  const [uploadVisible, setUploadVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const location = useLocation();

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setUploadVisible(true);
    const { ok } = await listingsApi.addListing({ ...listing, location }, progress => setProgress(progress));

    if (!ok) {
      setUploadVisible(false);
      alert('Could not post the listing');
    }

    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <UploadScreen onDone={() => setUploadVisible(false)} visible={uploadVisible} progress={progress} />
      <AppForm
        initialValues={{ title: '', price: '', description: '', category: '', images: [] }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} name="title" placeholder="Title" />
        <AppFormField keyboardType="numeric" maxLength={8} name="price" placeholder="Price" width="30%" />
        <AppFormPicker
          items={categories}
          name="category"
          placeholder="Category"
          width="50%"
          PickerItemComponent={CategoryPickerItem}
          numColumns={3}
        />
        <AppFormField maxLength={255} multiline name="description" numberOfLines={3} placeholder="Description" />
        <SubmitButton title="Post" />
      </AppForm>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default ListingEditScreen;
