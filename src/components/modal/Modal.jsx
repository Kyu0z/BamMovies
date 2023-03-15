import React from 'react'
import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import './modal.scss'


const Modal = ({id, active, children}) => {

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        setIsActive(active)
    }, [active])

    return (
        <div id = {id} className = {`modal ${isActive ? 'active' : ''}`}>
            {children}
        </div>
    )
}



export const ModalContent = ({children, onClose}) => {
    return (
        <div className='modal__content'>
            <div className="modal__content__out" onClick = {onClose}>
                <div className="modal__content__out-above"></div>
                <div className="modal__content__out-under"></div>
            </div>
            {children}
        </div>
    )
}

export default Modal

Modal.propTypes = {
    id: PropTypes.string,
    active: PropTypes.bool
}

ModalContent.propTypes = {
    onClose : PropTypes.func
}




