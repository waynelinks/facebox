import React, { Fragment } from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'

import './App.css'
import NavBar from './components/NavBar'

const App = ({ route, session }) => {
  return (
    <div className='App-container'>
      {session && (
        <Fragment>
          <NavBar session={session} />
        </Fragment>
      )}
      {renderRoutes(route.routes)}
    </div>
  )
}

const mapStateToProps = ({ users }) => ({
  session: users.session
})

export default {
  component: connect(mapStateToProps)(App)
}
