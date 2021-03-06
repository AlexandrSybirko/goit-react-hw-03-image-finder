
import React, { Component } from 'react';
import s from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal'

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { src, alt, largeImageUrl } = this.props;
    const { showModal } = this.state;

    return (
      <li className={s.ImageGalleryItem}>
        <img
          onClick={this.toggleModal}
          src={src}
          alt={alt}
          className={s.ImageGalleryItemImage}
        />
        {showModal && (
          <Modal onClose={this.toggleModal} src={largeImageUrl} alt={alt} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    largeImageUrl: PropTypes.string.isRequired,
  };

export default ImageGalleryItem;