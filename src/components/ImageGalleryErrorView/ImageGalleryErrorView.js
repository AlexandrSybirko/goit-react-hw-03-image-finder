import PropTypes from 'prop-types';

function ImageGalleryErrorView({ message }) {
  return (
    <div role="alert">
      <p>ERROR: {message}</p>
    </div>
  );
}

ImageGalleryErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ImageGalleryErrorView;