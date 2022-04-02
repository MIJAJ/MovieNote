import React from 'react'
import requests from '../api/requests'
import Row from '../component/Row'
import Search from '../component/Search'
import Main_Topic from '../component/Main_Topic'

function Watch_Later() {
  return (
  <>
    <div className="max-w-2xl mx-auto py-8 px-4 sm:py-12 sm:px-4 lg:max-w-7xl lg:px-8">
      <div className="flex items-center justify-between">
      <Main_Topic title="Watch later" />
        
        <Search  />
      </div>
      <Row fetchURL={requests.fetchNetflixOriginals} Watch_Later />
    </div>
            
  </>
  )
}

export default Watch_Later