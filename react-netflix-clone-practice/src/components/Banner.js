import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <div className='banner'>
      <div className='banner__contents'>
        <h2 className='banner__title'></h2>
        <div className='banner__buttons'>
          <button className='banner__button play'>Play</button>
          <button className='banner__button info'>More Information</button>
        </div>
        <div className='banner__description'></div>
      </div>

      <div className='banner__fadeBottom'></div>
    </div>
  )
}

export default Banner