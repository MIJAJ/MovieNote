import React from 'react'
import requests from '../api/requests'
import Row from '../component/Row'
import Search from '../component/Search'

function Main_Topic({ title }) {
  return (
  <>
        <div className="flex items-center">
          <div className="justify-items-start">
            <h2 className="text-4xl font-bold tracking-tight text-white">{title}</h2>
            <p className="mt-3 text-md font-medium text-gray-200">There are {'3'} movies</p>
          </div>
        </div>
        
            
  </>
  )
}

export default Main_Topic