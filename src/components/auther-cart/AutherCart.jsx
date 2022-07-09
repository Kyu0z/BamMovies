import React from 'react'

import './author-cart.scss'

import {useState, useEffect} from 'react'

import pagesDb from '../../api/pagesDb'
import apiConfig from '../../api/apiConfig'

const AutherCart = (props) => {

    const [casts, setCasts] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await pagesDb.getCredits(props.category, props.id)
                setCasts(data.cast.slice(0, 5))
            } catch(error) {
                console.log(error)
            }
        }

        getData()
    }, [props.category, props.id])

    return (
        <div className="authers-cast">
            {
                casts.map((cast, index) => (
                    <div 
                        className="authers-cast__item" 
                        key = {index}
                        style={{backgroundImage: `url(${apiConfig.w500Img(cast.profile_path)})`}}
                    >
                        <span>{cast.name}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default AutherCart
