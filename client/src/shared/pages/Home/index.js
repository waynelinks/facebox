import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './index.css'
import ImageInput from '../../components/ImageInput'
import FaceRecognizer from '../../components/FaceRecognizer'
import Welcome from '../../components/Welcome'
import NavBar from '../../components/NavBar'

const Home = ({ session }) => {
  if (session) {
    return (
      <div className='home-container'>
          <NavBar session={session} />
        {/* <FaceRecognizer /> */}
        {/* <ImageInput /> */}
      </div>
    )
  }

  return <Redirect to='/signin' />
}

const mapStateToProps = ({ users }) => ({
  session: users.session
})

export default {
  component: connect(mapStateToProps)(Home)
}
