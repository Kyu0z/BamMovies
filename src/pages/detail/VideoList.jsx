import React from 'react'
import {useState, useEffect, useRef} from 'react'

import pagesDb from '../../api/pagesDb'

const VideoList = (props) => {
    const [videos, setVideos] = useState([])

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await pagesDb.getVideos(props.category, props.id)
                setVideos(data.results.slice(0, 4))
            }catch(error) {
                console.log(error)
            }
        }

        getData()
    }, [props.id, props.category])

    return (
        <>
            {
                videos.map((video, index) => (
                    <Video video = {video} key = {index} />
                ))
            }
        </>
    )
}

const Video = (props) => {

    const video = props.video

    const iframe = useRef(null)

    useEffect(() => {
        const height = iframe.current.offsetWidth * 9/16 + 'px'
        iframe.current.setAttribute('height', height)

    }, [])

    return (
        <div className="detail__videos__item">
            <h3>{video.name}</h3>
            <iframe 
                src={`https://youtube.com/embed/${video.key}`} 
                title = 'video_item'
                ref = {iframe}
            >
            </iframe>
        </div>
    )
}

export default VideoList



