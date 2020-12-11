import React, { Component } from 'react';
import {createPortal} from 'react-dom'
import s from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root')
export default class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    
    componentWillMount() {
window.removeEventListener('keydown', this.handleKeyDown)
     }
    
    handleKeyDown = e => {
            if(e.code === 'Escape') {this.props.onClose()}
        }
    
    render() {
        return (
            createPortal(<div className={s.modalBackdrop}>
                <div className={s.modalContent}>{this.props.children}</div>
            </div>, modalRoot)
            
        )
    }
}