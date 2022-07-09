import React from 'react'
import PropTypes from 'prop-types'
import './moviegrid.scss'

import {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'

import pageDbs, { movieType, tvType, mediaType, timeWindow } from '../../api/pagesDb'
import CartItem from '../../components/cart-item/CartItem'
import {ButtonOutline} from '../../components/button/Button'
import Input from '../../components/input/Input'

const MovieGrid = (props) => {

    const [items, setItems] = useState([])

    const [page, setPage] = useState(1)

    const [totalPage, setTotalPage] = useState(1)

    const [valueInput, setValueInput] = useState('')

    const history = useHistory()

    const {keyword} = useParams()



    useEffect(() => {

        const getData = async () => {
            if(!keyword) {
                try {
                    const params = {}
                    let data
                    switch(props.category) {
                        case 'movie':
                            data = await pageDbs.getMovies(movieType.popular, params)
                            setItems(data.results)
                            setTotalPage(data.total_pages)
                            break;
                        case 'tv':
                            data = await pageDbs.getTvs(tvType.airing_today, params)
                            setItems(data.results)
                            setTotalPage(data.total_pages)
                            break;
                        case 'trending':
                            data = await pageDbs.getTrendings(mediaType.all, timeWindow.week)
                            console.log(data)
                            setItems(data.results)
                            setTotalPage(data.total_pages)
                            break;
                        default:
                            throw new Error(`${props.category} is not exit`)
                    }
                }catch(error) {
                    console.log(error)
                }
            }else {
                const params = {
                    query: keyword
                }
                try {
                    const data = await pageDbs.search(props.category, params)
                    setItems(data.results)
                    setTotalPage(data.total_pages)
                }catch(error) {
                    console.log(error)
                }
            }
        }

        getData();
    }, [props.category, keyword])


    const loadMore = async () => {
        if(!keyword) {
            try {
                const params = {page: page + 1}
                let data
                switch(props.category) {
                    case 'movie':
                        data = await pageDbs.getMovies(movieType.popular, params)
                        setItems([...items, ...data.results])
                        setPage(page + 1)
                        break;
                    case 'tv' :
                        data = await pageDbs.getTvs(tvType.airing_today, params)
                        setItems([...items, ...data.results])
                        setPage(page + 1)
                        break;
                    case 'trending':
                        data = await pageDbs.getTrendings(mediaType.all, timeWindow.week)
                        setItems([...items, ...data.results])
                        setTotalPage(page + 1)
                        break;
                    default:
                        throw new Error(`${props.category} is not exit`)
                }
            }catch(error) {
                console.log(error)
            }
        }else {
            const params = {
                query: keyword,
                page: page + 1
            }
            try {
                const data = await pageDbs.search(props.category, params)
                setItems([...items, ...data.results])
                setPage(page + 1)
            }catch(error) {
                console.log(error)
            }
        }
    }

    return (
        <div className='movie-grid'>
            <div className="movie-grid__search">
                <Input 
                    onChange = {(e) => setValueInput(e.target.value)}
                    value = {valueInput}
                    placeholder = 'Type to text'
                />
                <ButtonOutline  
                    onClick = {() => 
                    {
                        history.push(`/search/${props.category}/${valueInput}`)
                        setPage(1)
                    }}
                >
                    {'Search'}
                </ButtonOutline>
            </div>
            <div className="movie-grid__list">
               {
                   items.map((item, index) => (
                    <CartItem item = {item} category = {props.category} key = {index}/>
                ))
               }
            </div>
            {
                page <= totalPage ?  (
                    <ButtonOutline onClick = {loadMore}>{'Load more'}</ButtonOutline>
                ) : ''
            }
        </div>
    )
}

export default MovieGrid

MovieGrid.propTypes = {
    category: PropTypes.string
}
