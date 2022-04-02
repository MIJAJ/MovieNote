import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './css/Row.css'
import Popup from "../component/popup";
import "../component/css/popup.css";
import '../App.css';
import {
    PlayIcon,
    BookmarkIcon,
    CheckCircleIcon,
    HeartIcon,
    MenuIcon,
    XIcon,
  } from '@heroicons/react/solid'

  const solutions = [
    {
      name: 'Currently watching',
      status: 'Currently_Watching',
      href: '/currentlywatching',
      icon: PlayIcon,
    },
    {
      name: 'Watch later',
      status: 'Watch_Later',
      href: '/watchlater',
      icon: BookmarkIcon,
    },
    {
      name: 'Finished watching',
      status: 'Finished_Watching',
      href: '/finishedwatching',
      icon: CheckCircleIcon,
    },
    {
      name: 'Favorite movie',
      status: 'Favorite_Movie',
      href: '/favoritemovie',
      icon: HeartIcon,
    },
  ]
  

const img_base = "https://image.tmdb.org/t/p/original"
function Row({ title, fetchURL, Currently_Watching, Watch_Later, Finished_Watching, Favorite_Movie }) {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            console.log(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])

    const [selectData, setSelectData] = useState()
    const [popup, setPopup] = useState(false);

    const togglePopup = () => {
        setPopup(!popup);
    };

    const openPopup = (id) => {
        setPopup(true)
        setSelectData(movies.find((val) => val.id === id))
    }

    if (popup) {
        document.body.classList.add("active-popup");
    } else {
        document.body.classList.remove("active-popup");
    }

    return (
    <>
    <h2 className="py-4 text-4xl font-bold tracking-tight text-white">{title}</h2>
    <div className="mt-6 grid grid-cols-2 gap-y-5 gap-x-2 sm:grid-cols-4 lg:grid-cols-5 xl:gap-x-4">
        {movies.map(movie => (
        <div key={movie.id} className="relative group overflow-hidden transition duration-500 hover:shadow-lg hover:scale-110">
            <div className="w-full h-40 aspect-w-1 aspect-h-1 rounded-md overflow-hidden sm:h-60 lg:h-80">
                <img
                    src={`${img_base}${movie.poster_path}`}
                    alt={movie.name}
                    className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
                    onClick={ () => openPopup(movie.id)}
                />
                <div class="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0" onClick={ () => openPopup(movie.id)}>
                    <div class="absolute w-full flex place-content-center mt-40">
                        <p class="text-md font-medium text-center w-4/5 text-white mt-10">{movie.name}</p>
                    </div>
                    <div class="absolute w-full flex place-content-center bottom-2">
                        <div class="grid grid-cols-4 gap-1 absolute bottom-3">
                        {/*{solutions.map((item) => (
                            <a onClick={item.href} href={item.href} className={`${movie ? "bg-red-700 hover:bg-red-800" : "bg-gray-700 hover:bg-gray-800"} text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}`}>
                                <item.icon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true"/>
                            </a>
                        ))}*/}
                            <a onClick="/currentlywatching" href="/currentlywatching" className={`${Currently_Watching ? "bg-red-700 hover:bg-red-800" : "bg-gray-700 hover:bg-gray-800"} text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}`}>
                                <PlayIcon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true"/>
                            </a>
                            <a onClick="/watchlater" href="/watchlater" className={`${Watch_Later ? "bg-red-700 hover:bg-red-800" : "bg-gray-700 hover:bg-gray-800"} text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}`}>
                                <BookmarkIcon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true"/>
                            </a>
                            <a onClick="/finishedwatching" href="/finishedwatching" className={`${Finished_Watching ? "bg-red-700 hover:bg-red-800" : "bg-gray-700 hover:bg-gray-800"} text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}`}>
                                <CheckCircleIcon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true"/>
                            </a>
                            <a onClick="/favoritemovie" href="/favoritemovie" className={`${Favorite_Movie ? "bg-red-700 hover:bg-red-800" : "bg-gray-700 hover:bg-gray-800"} text-white font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2"}`}>
                                <HeartIcon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        ))}
        {popup && (
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div className="popup-content rounded-lg shadow">
                <Popup selectData={selectData}/>
                <button class="close-popup text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="extralarge-modal" onClick={togglePopup}>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
        </div>
        )} 
    </div>
        </>
        /*<div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map(movie => (
                    <img
                        onClick={() => history.push({ pathname: '/details', state: movie })}
                        key={movie.id}
                        className={`row_poster ${isList && "row_poster_large"}`} src={`${img_base}${isList ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>
        </div>*/
    )
}

export default Row
