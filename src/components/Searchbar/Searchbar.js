import React, { Component } from 'react';

import s from './Searchbar.module.css'


class ContactForm extends Component {
  state = {
    imageName: '',
  }
  
  handleChange = e => {
    
    this.setState({ imageName: e.currentTarget.value.toLowerCase() })
  }

  handleSubmit = e => {
    
    e.preventDefault();
    this.props.onSubmit(this.state.imageName);

    
    this.reset();
  }  
  
  reset() {
    this.setState({
       imageName: ''
    })
  } 

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
           <span className={s.SearchFormButtonLabel}>Search</span>
          </button>
            <input
            value={this.state.imageName}
            onChange={this.handleNameChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />             
        </form>
      </header>
    )
  }
}

export default ContactForm;