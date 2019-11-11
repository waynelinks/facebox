import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import './index.css'
import ImageInput from '../../components/ImageInput'

const Home = ({ session }) => {
  if (!session) {    
    return (
      <div className='home-container'>
        <ImageInput />
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
