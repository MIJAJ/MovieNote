import React from 'react'
import requests from '../api/requests'
import Banner from '../component/Banner'
import Row from '../component/Row'
import './css/Home.css';

function Home() {
    return (
        <>
        <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-4 md:px-6 lg:max-w-7xl lg:px-8">
            <Banner fetchURL={requests.fetchNetflixOriginals} />
            <div className="py-4">

            <Row title="Thriller Movies" fetchURL={requests.fetchThrillerMovies} />
            <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
            <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
            <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
            <Row title="Animation Movies" fetchURL={requests.fetchAnimationMovies} />
            </div>
        </div>
            
        </>
    )
}

export default Home
