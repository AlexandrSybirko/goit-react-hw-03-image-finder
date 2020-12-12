import React, { Component } from 'react';
import { ToastContainer} from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar'
import ImageGalleryInfo from './components/ImageGalleryInfo/ImagesGalleryInfo'


class App extends Component {
  state = {
    imageName: '',
  };

  componentDidMount() {}

  handleFormSubmit = imageName => {
    this.setState({ imageName });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        <ImageGalleryInfo imageName={this.state.imageName} />
        <ToastContainer autoClose={3000} />
      </>
    );
  }
}

export default App;