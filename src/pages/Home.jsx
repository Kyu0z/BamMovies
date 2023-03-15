import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import SliderHome from '../components/slider-home/SliderHome'
import ListItem from '../components/list-item/ListItem'
import { ButtonOutline } from '../components/button/Button'

import{category, movieType, tvType, mediaType, timeWindow} from '../api/pagesDb'


const Home = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    })

    return (
        <>
            <div className="home">
                <SliderHome />

                <div className="container-list">
                    <div className="container-list__header">
                        <h3>Trendings</h3>
                        <Link to = {`/${category.trending}`}><ButtonOutline>View more</ButtonOutline></Link>
                    </div>
                    <ListItem category = {category.trending} mediaType = {mediaType.all}  timeWindow = {timeWindow.week}></ListItem>
                </div>

                <div className="container-list">
                    <div className="container-list__header">
                        <h3>Movies</h3>
                        <Link to = {`/${category.movie}`}><ButtonOutline>View more</ButtonOutline></Link>
                    </div>
                    <ListItem category = {category.movie} type = {movieType.now_playing}></ListItem>
                </div>

                <div className="container-list">
                    <div className="container-list__header">
                        <h3>Tvs</h3>
                        <Link to = {`/${category.tv}`}><ButtonOutline>View more</ButtonOutline></Link>
                    </div>
                    <ListItem category = {category.tv} type = {tvType.on_the_air}></ListItem>
                </div>
            </div>
        </>
    )
}

export default Home
