import React from 'react'
import { connect } from 'react-redux'

import './index.css'

const FaceRecognizer = ({ image }) => {
  console.log('FaceBOX',image)
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
  image: image.image_input
})

export default connect(mapStateToProps)(FaceRecognizer)
