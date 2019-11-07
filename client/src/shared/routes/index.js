import React from 'react'

import App from '../App'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import NotFound from '../pages/NotFound'

export default [
  {
    ...App,
    routes: [
      {
        ...Home,
        path: '/',
        exact: true
      },
      {
        ...Signup,
        path: '/signup'
      },
      {
        ...Signin,
        path: '/signin'
      },
      {
        ...NotFound
      }
    ]
  }
]
