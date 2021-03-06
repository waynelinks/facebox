import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { signoutUser } from '../../redux/actions/users'
import './index.css'

const SignoutButton = ({ signoutUser }) => {
  const onSignout = payload => signoutUser(payload)

  return (
    <Fragment>
      <Link className='nav-link' to='/signin' onClick={() => onSignout(false)}>
        Signout
      </Link>
    </Fragment>
  )
}

export default connect(
  null,
  { signoutUser }
)(SignoutButton)
