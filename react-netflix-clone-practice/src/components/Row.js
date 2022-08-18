import axios from '../api/axios';
import React, { useEffect, useState } from 'react'
import './Row.css';

const Row = ({ title, isLarge, fetchUrl }) => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, [])
  
  const getData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
    console.log('movie', movies)
  }

  const arrowRight = () => {
    document.getElementById(`posters_${title}`).scrollLeft += 800;
  }
  const arrowLeft = () => {
    document.getElementById(`posters_${title}`).scrollLeft -= 800;
  }

  

  return (
    <section className='row'>
      <h2>{title}</h2>
      <div className='slider'>
        <div className='slider__arrow-left' onClick={arrowLeft}>
          <span className='arrow'>{"<"}</span>
        </div>
        <div className="row__posters" id={`posters_${title}`}>
          {
            movies.map((movie) => (
              <img
              key={movie.id}
              id={movie.id}
              className={`row__poster ${isLarge && "row__posterLarge"}`}
              src={`https://image.tmdb.org/t/p/original${isLarge? movie.poster_path : movie.backdrop_path}`}
              alt={movie.title}
              />
            ))
          }
        </div>
        <div className='slider__arrow-right' onClick={arrowRight}>
          <span className='arrow'>{">"}</span>
        </div>

      </div>

    </section>
  )
}

export default Row