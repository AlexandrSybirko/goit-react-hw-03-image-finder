function fetchImages(name, page) {
    const API_KEY = '19089587-d048225f5585fc89c8e323f31';
    const BASE_URL = 'https://pixabay.com/api';
  return fetch(
    `${BASE_URL}/?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('No response from server'));
  });
}

const api = {
  fetchImages,
};

export default api;
