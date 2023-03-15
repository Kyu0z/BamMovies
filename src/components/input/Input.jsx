import React from 'react'
import './input.scss'

import PropTypes from 'prop-types'

const Input = (props) => {
    return (
       <div className="input">
           <input 
            type = 'text' 
            placeholder = {props.placeholder} 
            value = {props.value} 
            onChange = {props.onChange}
            />
       </div>
    )
}

export default Input

Input.propTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
}
