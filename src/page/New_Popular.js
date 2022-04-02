import React from 'react'
import requests from '../api/requests'
import Row from '../component/Row'

function New_Popular() {
    return (
        <>
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-4 lg:max-w-7xl lg:px-8">
            <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchURL={requests.fetchTrending} />
            <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
    </div>
            
        </>
    )
}

export default New_Popular
