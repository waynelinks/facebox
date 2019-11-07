import React from 'react'
import { connect } from 'react-redux'
import { renderRoutes } from 'react-router-config'

const App = ({ users, route }) => {
  return (
    <div className='App-container'>
      {user && console.log(users)}
      {renderRoutes(route.routes)}
    </div>
  )
}

const mapStateToProps = ({ users }) => ({
  users
})

export default {
  component: connect(mapStateToProps)(App)
}
