import React from 'react'
import requests from '../../api/requests'
import Banner from '../../components/Banner'
import Row from '../../components/Row'

const MainPage = () => {
  return (
    <div>
      
      <Banner/>
  
      <Row
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />

      <Row
        title="Trending Now"
        id="TN"
        fetchURL={requests.fetchTrending}
        isLargeRow={false}
      />

      <Row
        title="Top Rated"
        id="TR"
        fetchURL={requests.fetchTopRated}
        isLargeRow={false}
      />

      <Row
        title="Action Movies"
        id="AM"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={false}
      />

      <Row
        title="Comedy Movies"
        id="CM"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={false}
      />

    </div>
  )
}

export default MainPage