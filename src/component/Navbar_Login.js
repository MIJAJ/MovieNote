import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  PlayIcon,
  BookmarkIcon,
  CheckCircleIcon,
  HeartIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline'
import {
  UserIcon,
} from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'
import logo from '../pic/Logo_MovieNote.svg';

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

const resources = [
  {
    name: 'Privacy Agreement',
    href: '/privacy',
  },
  {
    name: 'Term of Service',
    href: '/service',
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Popover className="relative bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-600 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a href="/">
              <img className="h-10 w-auto sm:h-12" src={logo} alt=""/>
            </a>
          </div>

          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-700">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>

          <Popover.Group as="nav" className="hidden md:flex space-x-10">
            <a href="/" className="text-base font-medium text-gray-300 hover:text-gray-400">
              Home
            </a>
            <a href="/newpopular" className="text-base font-medium text-gray-300 hover:text-gray-400">
              New & Popular
            </a>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className={classNames(open ? 'text-gray-300' : 'text-gray-300', 'group bg-black rounded-md inline-flex items-center text-base font-medium hover:text-gray-400')}>
                    <span>My list</span>
                    <ChevronDownIcon className={classNames(open ? 'text-gray-300' : 'text-gray-300', 'ml-2 h-5 w-5 group-hover:text-gray-400')}aria-hidden="true"/>
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1">
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                      <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-slate-900 px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <a key={item.name} href={item.href} className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-700">
                              <item.icon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true"/>
                              <div className="ml-4">
                                <p className="text-base font-medium text-white">{item.name}</p>
                                <p className="mt-1 text-sm text-gray-300">{item.description}</p>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>

          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="/profile">
            <UserIcon className="inline-block h-9 w-9 rounded-xl text-gray-200 ring-2 ring-gray-300"/>
            {/*<img
            className="inline-block h-9 w-9 rounded-xl ring-2 ring-gray-300"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
            />*/}
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        <Popover.Panel focus className="absolute top-0 inset-x-2 p-4 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-slate-900 divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-slate-900 rounded-md p-2 inline-flex items-center justify-center text-gray-500 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/profile"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700"
                  >
                    <UserIcon className="flex-shrink-0 h-6 w-6 text-white"/>
                    <span className="ml-3 text-base font-medium text-gray-300 hover:text-gray-200">Profile</span>
                  </a>
                  {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-700"
                  >
                    <item.icon className="flex-shrink-0 h-6 w-6 text-white" aria-hidden="true" />
                    <span className="ml-3 text-base font-medium text-gray-300 hover:text-gray-200">{item.name}</span>
                  </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="py-6 px-5 space-y-6">
              <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                {resources.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-base font-medium text-gray-300 hover:text-gray-500">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
      
    </Popover>
  );
}
