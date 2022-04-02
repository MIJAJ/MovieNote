import { LockClosedIcon } from '@heroicons/react/solid'
import logo from '../pic/Logo_MovieNote.svg';

export default function SignUp() {
  return (
    <>
    <div className="min-h-full min-w-full flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
            <div>
                <img className="mx-auto h-12 w-auto" src={logo} alt="Workflow"/>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Sign up to your account</h2>
            </div>

            <form className="mt-8 space-y-6" action="#" method="">
                <input type="hidden" name="remember" defaultValue="true" />
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="name" className="sr-only">Name</label>
                        <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="current-name"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Name"
                        />
                    </div>
                    <div>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <input
                        id="email-address"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Email address"
                        />
                    </div>
                    

                    <div className='space-y-5'>
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
                        <p className="mt-6 text-center text-sm font-medium text-gray-400">By clicking " Sign up ", you indicate that you have read and agreed to the{' '}
                        <a href="/privacy" className="text-gray-400 hover:text-gray-500 underline">Privacy Agreement</a> 
                        {' '}and{' '}
                        <a href="/service" className="text-gray-400 hover:text-gray-500 underline">Term of Service</a>{' '}
                        , and confirm that you are aged 13 or above.
                        </p>
                    </div>
                </div>
                
                <div>
                    <button  type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Sign up
                    </button >
                </div>
            </form>

        </div>
      </div>
    </>
  )
}