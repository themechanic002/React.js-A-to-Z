import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../api/axios'

const Banner = ({ fetchUrl }) => {

  const [movie, setMovie] = useState("");

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const request = await axios.get(fetchUrl);
    const results = request.data.results;
    setMovie(results[Math.floor(Math.random() * results.length)]);

  }



  return (

    <header
      className='banner'
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover"
      }}>

      <div className='banner'>
        <div className='banner__contents'>
          <h2 className='banner__title'>{movie.title}</h2>
          <div className='banner__buttons'>
            <button className='banner__button play'>Play</button>
            <button className='banner__button info'>More Information</button>
          </div>
          <div className='banner__description'>{movie.overview}</div>
        </div>

        <div className='banner__fadeBottom'></div>
      </div>

    </header>

  )
}

export default Banner