import React from 'react'
import PropTypes from 'prop-types'

import './button.scss'

const Button = (props) => {
    return (
        <button className='btn' onClick = {props.onClick}>{props.children}</button>
    )
}

export const ButtonOutline = (props) => {
    return (
        <button 
            className='btn outline'
            onClick = {props.onClick}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
}

ButtonOutline.propTypes = {
    children: PropTypes.string,
    onClick: PropTypes.func
}

export default Button


