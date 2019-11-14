import React from 'react'
import { renderRoutes } from 'react-router-config'

import './App.css'

const App = ({ route }) => {
  return <div className='App-container'>{renderRoutes(route.routes)}</div>
}

export default {
  component: App
}
