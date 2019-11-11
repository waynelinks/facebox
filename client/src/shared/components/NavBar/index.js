import React from 'react'

import './index.css'
import Logo from '../Logo'

const NavBar = ({ session }) => {
  return (
    <nav>
      <Logo />
      {!session && <Signout loginStatus={isSignedIn} />}
    </nav>
  )
}

export default NavBar
