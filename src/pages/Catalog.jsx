import React from 'react'
import {useParams} from 'react-router-dom'
import MovieGrid from '../components/movie-grid/MovieGrid'
import {useEffect} from 'react'

const Catalog = () => {

    const {category} = useParams()
    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
    })

    return (
        <div className="catalog">
            <div className="catalog__title">
                <h3>
                    {category === 'movie' ? 'Movies' : (category === 'tv' ? 'Tvs' : 'Trendings') }
                </h3>
            </div>
            <div className="catolog__body">
                <MovieGrid category = {category}/>
            </div>
        </div>
    )
}

export default Catalog





