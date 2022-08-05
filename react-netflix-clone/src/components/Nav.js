import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <nav className='nav'>
      <img
        alt='Netflix logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png'
        className='nav__logo'
        onClick={() => window.location.href='https://www.netflix.com/kr/'}
      />
      <img
        alt='User logged'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        className='nav__avatar'
      />
    </nav>
  )
}

export default Nav