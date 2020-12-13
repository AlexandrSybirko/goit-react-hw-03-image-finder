import { Component } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import s from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  

  scroll = () => {
    this.props.onClick();
      scroll.scrollToBottom();
  };

  render() {
    return (
      <div className={s.ButtonDiv}>
        <button onClick={this.scroll} className={s.Button} type="button">
        Load more
      </button>
      </div>
      
    );
  }
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
  };

export default Button;
