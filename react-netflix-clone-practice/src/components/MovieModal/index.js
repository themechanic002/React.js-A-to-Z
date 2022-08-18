import React from 'react'
import './MovieModal.css'

const MovieModal = ({ id, title, backdrop_path, video, first_air_date, release_date, vote_average, overview, setModalOpen }) => {
  return (
    <div className='presentation'>
      <div className='wrapper-modal'>
        <div className='modal'>
          <span className='modal-close' onClick={() => {setModalOpen(false)}}>X</span>
          <img
            className='modal__poster-img'
            src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
            alt='title'
          />
          <div className='modal__content'>
            <p className='modal__details'>
              <span className='modal__user_perc'>
                100% for you
              </span>
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className='modal__title'>{title}</h2>
            <p className='modal__overview'></p>
            <p className='modal__overview'>{overview}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieModal