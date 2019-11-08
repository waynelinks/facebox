import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Home = ({ session }) => {
  if (session) {    
    return (
      <div className='home-container'>Home</div>
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
