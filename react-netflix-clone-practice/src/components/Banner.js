import React, { useEffect, useState } from 'react'
import './Banner.css';
import axios from '../api/axios'

const Banner = ({ fetchUrl }) => {

  const [movie, setMovie] = useState("");
  const [isPlay, setIsPlay] = useState(false);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const request = await axios.get(fetchUrl);
    const results = request.data.results;

    const movieId = results[Math.floor(Math.random() * results.length)].id;

    const { data: movieSelected } = await axios.get('movie/' + movieId, {
      params: { append_to_response: 'videos' }
    });

    console.log('movieSelected', movieSelected);

    setMovie(movieSelected);
  }

  const handlePlay = () => {
    if (movie.videos.results.length !== 0)
      setIsPlay(true);
  }

  if (!isPlay) {
    return (
      <header
        className='banner'
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
          backgroundPosition: "top center",
          backgroundSize: "cover"
        }}>

        <div className='banner'>
          <div className='banner__contents'>
            <h2 className='banner__title'>{movie.title}</h2>
            <div className='banner__buttons'>
              <button className='banner__button play' onClick={handlePlay}>Play</button>
              <button className='banner__button info'>More Information</button>
            </div>
            <div className='banner__description'>{movie.overview}</div>
          </div>

          <div className='banner__fadeBottom'></div>
        </div>



      </header>

    )
  }
  else {
    return (
      <iframe
        style={{overflow: 'hidden'}}
        width={window.innerWidth - 20}
        height={window.innerHeight}
        src={`https://www.youtube.com/embed/${movie.videos.results[0].key}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; picture-in-picture" allowfullscreen
        >
      </iframe>
    )
  }


}

export default Banner