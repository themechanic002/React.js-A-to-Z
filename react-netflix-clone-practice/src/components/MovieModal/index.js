import React from 'react'

const MovieModal = () => {
  return (
    <div className='presentation'>
      <div className='wrapper-modal'>
        <div className='modal'>
          <span className='modal-close'>X</span>
          <img
            className='modal__poster-img'
          />
          <div className='modal__content'>
            <p className='modal__details'>
              <span className='modal__user_perc'>
                100% for you
              </span>
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className='modal__title'></h2>
            <p className='modal__overview'></p>
            <p className='modal__overview'></p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default MovieModal