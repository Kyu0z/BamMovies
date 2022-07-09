import React from 'react'
import {useState, useEffect, useRef} from 'react'
import { useHistory } from 'react-router-dom';

import './slider_home.scss'
import SwiperCore, {Autoplay} from 'swiper'
import {Swiper, SwiperSlide} from 'swiper/react'

import pagesDb, {category, movieType} from '../../api/pagesDb'
import apiConfig from '../../api/apiConfig'
import Button, {ButtonOutline} from '../button/Button'
import Modal, {ModalContent} from '../modal/Modal'

const SliderHome = () => {
    SwiperCore.use([Autoplay])

    const [items, setItems] = useState([])

    useEffect(() => {
        const getDataSlider = async () => {
            const params = {page: 1}

            try {
                const data = await pagesDb.getMovies(movieType.popular, params)
                setItems(data.results.slice(10,15))
            } catch (error) {
                console.log('error')
            }
        }
        getDataSlider()
    }, [])

    return (
       <>
        {   
            items
            &&
            <div className="slider-home">
                <Swiper
                    spaceBetween={0}
                    modules={[Autoplay]}
                    grabCursor={true}
                    slidesPerView={1}
                    // autoplay = {true}
                >
                    {items.map((item, index) => (
                        <SwiperSlide key = {index}>
                            {({ isActive }) => (
                                <SliderItem item= {item} className={isActive ? 'active' : ''} />
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
                {
                    items.map((item, index) => (
                        <TrailerModal item = {item} key = {index}/>
                    ))
                }
            </div>
        }
       </>
    )
}

function SliderItem({item, className}) {
    const sliderItem = useRef(null)
    const background = apiConfig.originalImg(item.backdrop_path)
    const history = useHistory()

    useEffect(() => {
        sliderItem.current.style.backgroundImage = `url(${background})`
    })

    const showTrailer = () => {
        const modal = document.querySelector(`#modal__${item.id}`)
        const getDataVideos = async () => {
            try {
                const videos = await pagesDb.getVideos(category.movie, item.id)
                if(videos.results.length > 0) {
                    const keyVideos = videos.results[0].key
                    const link = `https://youtube.com/embed/${keyVideos}`
                    modal.querySelector('.modal__content iframe').setAttribute('src', link)
                    
                } else {
                    modal.querySelector('modal__content').innerHTML = 'No Trailer'
                }
            } catch(error) {
                console.log(error)
            }
        } 
        getDataVideos()
        modal.classList.add('active')
    }

    return (
            <div className={`slider-home__item ${className}`} ref = {sliderItem} >
                <div className="slider-home__item__info">
                    <h3>{item.title}</h3>
                    <p>{item.overview}</p>
                    <div className="slider-home__item__info__button">
                        <ButtonOutline onClick = {() => history.push(`/movie/${item.id}`)}>Watch Now</ButtonOutline>
                        <Button onClick = {showTrailer}>Watch Trailer</Button>
                    </div>
                </div>
                <div className="slider-home__item__poster">
                    <img src={apiConfig.w500Img(item.poster_path)} alt="" />
                </div>
            </div>
        )   
}

function TrailerModal(props) {
    const item = props.item
    
    const onClose = () => {
        const modal = document.querySelector(`#modal__${item.id}`)
        modal.classList.remove('active')
        modal.querySelector('iframe').setAttribute('src', '')
    }

    return (
        <Modal active = {false} id = {`modal__${item.id}`}>
            <ModalContent item = {item} onClose = {onClose}>
                <iframe src="" title = 'videos'></iframe>
            </ModalContent>
        </Modal>
    )
}

export default SliderHome

