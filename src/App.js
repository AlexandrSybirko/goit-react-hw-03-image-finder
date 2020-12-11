import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar'
import Modal from './components/Modal/Modal'


class App extends Component {
  state = {
    
    imageName: '',
    showModal: false
  }

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
    
const {imageName, showModal} = this.state

    return (
      <>
      
        <Searchbar onSubmit={this.addContact} />
        <button type="button" onClick={this.toggleModal}>Open</button>
      {showModal && (<Modal onClose={this.toggleModal}></Modal>)}
        
      </>
    );
  }
}

export default App;