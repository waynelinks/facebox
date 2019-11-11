import React from 'react'
import { renderRoutes } from 'react-router-config'
import { connect } from 'react-redux'

import './App.css'
import Welcome from './components/Welcome'

const App = ({ route, session }) => {
  return <div className='App-container'>
    {!session && <Welcome />}
    {renderRoutes(route.routes)}
    </div>
}

const mapStateToProps = ({ users }) => ({
  session: users.session
})

export default {
  component: connect(mapStateToProps)(App)
}
