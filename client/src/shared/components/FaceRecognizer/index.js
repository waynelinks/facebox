import React from 'react'
import { connect } from 'react-redux'

import './index.css'

const FaceRecognizer = ({ stateprops }) => {
  return (
    <div className='facebox'>
      <img
        src='https://i2-prod.mirror.co.uk/incoming/article14334083.ece/ALTERNATES/s615/3_Beautiful-girl-with-a-gentle-smile.jpg'
        alt=''
      />
    </div>
  )
}

const mapStateToProps = ({ state }) => ({
  state
})

export default connect(mapStateToProps)(FaceRecognizer)
