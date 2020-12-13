import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryErrorView from '../ImageGalleryErrorView/ImageGalleryErrorView';
import ImageLoader from '../ImageLoader/ImageLoader';
import ImageGallery from '../ImageGallery/ImageGallery';
// import Button from '../Button/Button';
import imagesAPI from '../services/images-api';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImagesGalleryInfo extends Component {
  state = {
    images: null,
    error: null,
    status: Status.IDLE,
    page: 1,
  };

  static propTypes = {
    imageName: PropTypes.string.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ page: 1 });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      imagesAPI.fetchImages(nextName, nextPage)
        .then(images => this.setState({ images, status: Status.RESOLVED }))
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  onClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, status } = this.state;

    if (status === 'idle') {
      return <p>Please enter your search term</p>;
    }

    if (status === 'pending') {
      return <ImageLoader />;
    }

    if (status === 'rejected') {
      return <ImageGalleryErrorView message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={this.state.images.hits} />
          {/* <Button onClick={this.onClickLoadMore} page={this.state.page} /> */}
        </>
      );
    }
  }
}

export default ImagesGalleryInfo;