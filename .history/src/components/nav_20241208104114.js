import React from 'react'
import WHLogo from '../recources/whlogo.webp'

function nav() {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <img src={WHLogo}/>
      </div>
      <div className='rightSide'></div>
    </div>
  )
}

export default nav
