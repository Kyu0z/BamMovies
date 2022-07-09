import React from 'react'
import './detail.scss'

import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'

import pagesDb from '../../api/pagesDb'
import apiConfig from '../../api/apiConfig'

import AutherCart from '../../components/auther-cart/AutherCart'

import { ButtonOutline } from '../../components/button/Button'
import VideoList from './VideoList'
import CartItem from '../../components/cart-item/CartItem'

import {Swiper, SwiperSlide} from 'swiper/react'

const Detail = () => {

    const [item, setItem] = useState()

    const {category, id} = useParams()

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    })

    useEffect(() => {
        const getData = async () => {
            const params = {}
            try {
                const data = await pagesDb.getDetails(category === 'trending' ? 'movie' : category, id, params)
                setItem(data)
            } catch(error){
                console.log(error)
            }
        }

        getData()
    }, [category, id])



    return (
        <>
            {item && (
            <div className='detail'>
                <div className="banner"
                    style= {{backgroundImage: `url(${apiConfig.originalImg( item.backdrop_path  || item.poster_path)})`}}
                ></div>
                <div className="detail__info">
                    <div className="detail__info__img" style= {{backgroundImage: `url(${apiConfig.w500Img(item.poster_path || item.backdrop_path)})`}}>
                    </div>
                    <div className="detail__info__credits">
                        <h2>{item.title || item.name}</h2>
                        <div className="detail__info__credits__select">
                            {
                                item.genres.slice(0,5).map((genre, index) => (
                                    <ButtonOutline key = {index}>{genre.name}</ButtonOutline>
                                ))
                            }
                        </div>
                        <p className="detail__info__credits__overview">{item.overview}</p>
                        <div className="detail__info__credits__authors">
                            <h5>Casts</h5>
                            <AutherCart id = {id} category = {category === 'trending' ? 'movie' : category} />
                        </div>
    
                    </div>
                </div>
                <div className="detail__videos">
                    <VideoList id = {id} category = {category === 'trending' ? 'movie' : category} />
                </div>
                <div className="detail__similars">
                    <h3>Similars</h3>
                    <SimilarItem id = {id} category = {category === 'trending' ? 'movie' : category} />
                </div>
            </div>
            )}
        </>
    )
}

const SimilarItem = (props) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        const getItems = async () => {
            const params = {}
            try {
                const data = await pagesDb.getSimilars(props.category, props.id, params)   
                setItems(data.results)
            } catch(error) {
                console.log(error)
            }
        }

        getItems()
    }, [props.id, props.category])

    return (
        <div className="similar-item">
            <Swiper
                grabCursor = {true}
                speed = {500}
                spaceBetween = {10}
                slidesPerView = {'auto'}
            >
                {
                    items.map((item, index) => (
                        <SwiperSlide key = {index}>
                            <CartItem item = {item} category = {props.category} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default Detail
