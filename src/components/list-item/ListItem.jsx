import React from 'react'

import {useState, useEffect} from 'react'
import CartItem from '../cart-item/CartItem'
import pagesDb from '../../api/pagesDb'
import PropTypes from 'prop-types'

import {Swiper, SwiperSlide} from 'swiper/react'
// import SwiperCore, {Autoplay} from 'swiper'

import './list-item.scss'

const ListItem = (props) => {
    // SwiperCore.use([Autoplay])
    const [items, setItems] = useState([])

    useEffect(() => {
        const getData = async () => {
            if(props.mediaType && props.timeWindow) {
                const data = await pagesDb.getTrendings(props.mediaType, props.timeWindow)

                setItems(data.results)
            }
            else if(props.category === 'movie') {
                const params = {}
                const data = await pagesDb.getMovies(props.type, params) 

                setItems(data.results)
            }else {
                const params = {}
                const data = await pagesDb.getTvs(props.type, params)

                setItems(data.results)
            }
        }

        getData()
    }, [props.category, props.type, props.mediaType, props.timeWindow])

    
    return (
        <div className="list-item">
            <Swiper
                grabCursor = {true}
                speed={500}
                spaceBetween={10}
                slidesPerView = {'auto'}
                // autoplay = {true}
            >
            {   
                items.map((item, index) => (
                    <SwiperSlide key = {index}>
                        <CartItem item = {item} category = {props.category}></CartItem>
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}

export default ListItem

ListItem.propTypes = {
    mediaType: PropTypes.string,
    timeWindow: PropTypes.string,
    type: PropTypes.string,
    category: PropTypes.string
}


