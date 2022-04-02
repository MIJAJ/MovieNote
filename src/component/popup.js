import React from 'react';
import "./css/popup.css";
import {
    PlayIcon,
    BookmarkIcon,
    CheckCircleIcon,
    HeartIcon,
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
    <div className="relative bg-slate-900 rounded-lg shadow">
        <div className="space-y-6">
            <div className="w-full bg-gray-200 h-40 aspect-w-1 aspect-h-1 rounded-md overflow-hidden sm:h-60 md:h-80 lg:h-96">
                <img src={`${img_base}${selectData.backdrop_path}`} alt={selectData.name} className="w-full h-full object-center object-cover " />
            </div>
        </div>
        <div className="grid grid-cols-3">
            <div className="col-span-3 p-6 space-y-6 text-base leading-relaxed text-gray-300">
                <h3 className="text-2xl font-medium text-white dark:text-white">
                    {selectData.name}
                </h3>
                <p>{selectData.overview}</p>
                <div className="flex items-start space-x-2">
                    {solutions.map((item) => (
                    <a onClick={item.href} href={item.href} className="text-white bg-gray-700 hover:bg-gray-800 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        <item.icon className="flex-shrink-0 h-5 w-5 text-white" aria-hidden="true"/>
                    </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Popup;
