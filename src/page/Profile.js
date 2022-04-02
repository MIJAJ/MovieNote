import { LockClosedIcon } from '@heroicons/react/solid'
import logo from '../pic/Logo_MovieNote.svg';

export default function Profile() {
  return (
    <>
    <div className="min-h-full min-w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-0">
            <div>
                <h2 className="mt-6 text-start text-3xl font-extrabold text-white">Profile</h2>
            </div>

            <form className="mt-8 space-y-6" action="#" method="">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm">
                    <div>
                        <h2 className="text-start text-white py-2">Name</h2>
                        <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="current-name"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                        />
                    </div>

                    <div>
                        <h2 className="text-start text-white py-2">Email address</h2>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        />
                    </div>
                    
                    <div>
                        <h2 className="text-start text-white py-2">Photo</h2>
                        <div className="flex items-center">
                            <span className="inline-block h-12 w-12 rounded-md overflow-hidden bg-gray-100">
                                <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                                {/*<img
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt=""
                                />*/}
                            </span>
                            <div className="flex text-sm text-gray-600">
                                <label
                                    htmlFor="file-upload"
                                    className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                </label>
                            </div>
                        </div>  
                    </div>

                    <div>
                        <h2 className="text-start text-white py-2">Password</h2>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Password"
                        />
                    </div>
                    <div>
                        <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Confirm Password"
                        />
                    </div>
                    
                    <div>
                        <p className="mt-6 text-center text-sm font-medium text-gray-400">By clicking " Save ", you indicate that you have read and agreed to the{' '}
                        <a href="/privacy" className="text-gray-400 hover:text-gray-500 underline">Privacy Agreement</a> 
                        {' '}and{' '}
                        <a href="/service" className="text-gray-400 hover:text-gray-500 underline">Term of Service</a>{' '}
                        , and confirm that you are aged 13 or above.
                        </p>
                    </div>
                </div>
                
                <div>
                    <button  type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Save
                    </button >
                </div>
            </form>

        </div>
      </div>
    </>
  )
}