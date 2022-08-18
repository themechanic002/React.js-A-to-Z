import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <div className='nav'>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
        alt='nav__logo'
      />
      <img
        className='nav__avatar'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='nav__avatar'
      />
    </div>
  )
}

export default Nav