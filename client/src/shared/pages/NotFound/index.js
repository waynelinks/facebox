import React from 'react'

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return (
    <div>
      <h1>Ooops, route not found.</h1>
    </div>
  )
}

export default {
  component: NotFound
}
