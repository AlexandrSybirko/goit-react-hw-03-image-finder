import React, { Component } from 'react';
// import axios from 'axios';
import Searchbar from './components/Searchbar/Searchbar'
import Modal from './components/Modal/Modal'
import ImageLoader from './components/Loader/Loader'

class App extends Component {
  state = {
    imageName: '',
    loading: true,
    // image: {},
    // page: 1,
    showModal: false
  }
  
  // componentDidMount() {
  // const API_KEY = '19089587-d048225f5585fc89c8e323f31';
  //   const BASE_URL = 'https://pixabay.com/api';
  //   axios
  //     .get(`${BASE_URL}/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`)
  //     .then(response => this.setState({ articles: response.data.hits }));
  // }
  

  toggleModal = () => {
    this.setState(({showModal}) => ({showModal: !showModal}))
  }

  addContact = imageName => {

    if (imageName === '') {
      alert(`NO DATA.`)
      return;
    }

   this.setState({ imageName });
  };


  
  render() {
    
const {loading, showModal} = this.state

    return (
      <>
      
        <Searchbar onSubmit={this.addContact} />
        <button type="button" onClick={this.toggleModal}>Open</button>
      {showModal && (<Modal onClose={this.toggleModal}></Modal>)}
        
        {loading && <ImageLoader />}

      </>
    );
  }
}

export default App;