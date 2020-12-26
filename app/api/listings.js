import apiClient from './client';

const endPoint = '/listings';

const addListing = (listing, onUploadProgress) => {
  const { title, price, category, description, images, location } = listing;
  const data = new FormData();

  data.append('title', title);
  data.append('price', price);
  data.append('categoryId', category.value);
  data.append('description', description);

  images.forEach((image, index) => {
    data.append('images', {
      name: 'image' + index,
      type: 'image/jpeg',
      uri: image,
    });
  });

  location && data.append('location', JSON.stringify(location));

  return apiClient.post(endPoint, data, {
    onUploadProgress: progress => onUploadProgress(progress.loaded / progress.total),
  });
};

const getListings = () => apiClient.get(endPoint);

export default {
  addListing,
  getListings,
};
