import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
    trending: 'trending'
}

export const tvType = {
    airing_today: 'airing_today',
    on_the_air: 'on_the_air',
    popular: 'popular'
}

export const movieType = {
    now_playing: 'now_playing',
    popular: 'popular',
    latest: 'latest'
}

export const mediaType = {
    all: 'all',
    movie: 'movie',
    tv: 'tv',
    person: 'person'
}

export const timeWindow = {
    day: 'day',
    week: 'week'
}

const pagesDb = {
    getMovies(movieType, params) {
        const url = `/movie/${movieType}`
        return axiosClient.get(url, {params})
    },
    getTvs(tvType, params) {
        const url = `/tv/${tvType}`
        return axiosClient.get(url, {params})
    },
    getTrendings(mediaType, timeWindow) {
        const url = `/trending/${mediaType}/${timeWindow}`
        return axiosClient.get(url, {params: {}})
    },
    getCredits(category, id) {
        const url = `/${category}/${id}/credits`
        return axiosClient.get(url, {params: {}})
    },
    getDetails(category, id, params) {
        const url = `/${category}/${id}`
        return axiosClient.get(url, {params})
    },
    getVideos(category, id) {
        const url = `/${category}/${id}/videos`
        return axiosClient.get(url, {params: {}})
    },
    getSimilars(category, id, params) {
        const url = `/${category}/${id}/similar`
        return axiosClient.get(url, {params})
    },
    search(category, params) {
        const url = `/search/${category}`
        return axiosClient.get(url, {params})
    }
}

export default pagesDb