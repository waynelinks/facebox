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

const mapStateToProps = ({ image }) => ({
  image: image.image
})

export default connect(mapStateToProps)(FaceRecognizer)
