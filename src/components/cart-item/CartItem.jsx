import React from 'react'
import './cart-item.scss'

import apiConfig from '../../api/apiConfig'

import {Link} from 'react-router-dom'

import PropTypes from 'prop-types'

const CartItem = (props) => {

    const item = props.item

    const background = apiConfig.w500Img(item.poster_path ? item.poster_path : item.backdrop_path)

    return (
        <>
            <Link to = {`/${props.category}/${item.id}`}>
                <div className="cart-item"  style={{backgroundImage: `url(${background})`}}>
                    <div className="cart-item__footer">
                        <h4>{item.name ? item.name : item.title}</h4>
                        <p>{item.overview}</p>
                    </div>
                    <span className='ribbon'>HD Vietsub</span>
                    <div className="icon-youtube">
                        <i className='bx bxl-youtube'></i>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default CartItem

CartItem.propTypes = {
    item : PropTypes.object,
    category: PropTypes.string
}


