import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

function ImageGallery({images}) {
  return (
    <ul className={s.ImageGallery}>
      {images.map((image, index) => (
        <ImageGalleryItem
          src={image.webformatURL}
          alt={image.tags}
          largeImageUrl={image.largeImageURL}
          key={index}
        />
      ))}
    </ul>
  );
    
} 

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;
           
    



