import { Link } from 'react-router-dom'

import React from 'react'

const Header = () => {
  return (
    <div className='header-back'>
      <div className='header'>
      <div className='container'>
        <div className='navbar'>
          <Link to={'/'}>Home</Link>
          <Link to={'/avatar'}>Avatar</Link>
          <Link to={'/products'}>Products</Link>
        </div>
      </div>
      </div>
    </div>
  )
}


export {Header}