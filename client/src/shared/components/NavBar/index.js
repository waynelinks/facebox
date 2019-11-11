import React from 'react'

import './index.css'
import Logo from '../Logo'
import SignoutButton from '../SignoutButton'

const NavBar = ({ session }) => {
  return (
    <nav>
      <Logo />
      {session && <SignoutButton />}
    </nav>
  )
}

export default NavBar
