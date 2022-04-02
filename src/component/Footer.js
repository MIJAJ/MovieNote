import React from 'react';
import "./css/popup.css";
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
      description: 'Save the movie you are currently watching.',
      href: '/currentlywatching',
      icon: PlayIcon,
    },
    {
      name: 'Watch later',
      description: 'Save movies you are interested in to watch later.',
      href: '/watchlater',
      icon: BookmarkIcon,
    },
    {
      name: 'Finished watching',
      description: "Save the movie you finished watching.",
      href: '/finishedwatching',
      icon: CheckCircleIcon,
    },
    {
      name: 'Favorite movie',
      description: 'Save your favorite movies. This may include movies that you would like to see again.',
      href: '/favoritemovie',
      icon: HeartIcon,
    },
  ]

const img_base = "https://image.tmdb.org/t/p/original"

function Popup({selectData}) {
  return (
    <>
    
    <footer className="p-4 bg-black rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
             <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="/privacy" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="/service" class="mr-4 hover:underline md:mr-6">Term of Service</a>
            </li>
            <li>
                <a href="#" class="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>

    </>
  );
}

export default Popup;
