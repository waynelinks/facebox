import React from 'react'

import './index.css'
import Logo from '../Logo'

const NavBar = ({ isSignedIn }) => {
  return (
    <nav>
      <Logo />
      {!isSignedIn && <Signout loginStatus={isSignedIn} />}
    </nav>
  )
}

export default NavBar
