import React, { Component } from 'react';
import { toast } from 'react-toastify';
import s from './Searchbar.module.css'
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    imageName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  
  handleChange = e => {
    
    this.setState({ imageName: e.currentTarget.value.toLowerCase() })
  }

  handleSubmit = e => {
    
    e.preventDefault();
    if (this.state.imageName.trim() === '') {
      toast.info('NO DATA.');
      return
    }
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
            onChange={this.handleChange}
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

export default Searchbar;