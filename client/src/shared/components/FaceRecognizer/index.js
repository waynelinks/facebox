import React from 'react'
import { connect } from 'react-redux'

import './index.css'

const FaceRecognizer = ({ image }) => {
  return (
    <div className='facebox'>
      <img
        src={image}
        alt=''
      />
    </div>
  )
}

const mapStateToProps = ({ clarifai }) => ({
  image: clarifai.image_input
})

export default connect(mapStateToProps)(FaceRecognizer)
