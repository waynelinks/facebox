import React from 'react'
import { connect } from 'react-redux'

import './index.css'

const FaceRecognizer = ({ image, box }) => {
  return (
    <div className='facebox'>
      <img id='image' src={image} alt='' />
      {box && (
        <div
          className='bounding-box'
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      )}
    </div>
  )
}

const mapStateToProps = ({ image }) => ({
  image: image.image,
  box: image.box
})

export default connect(mapStateToProps)(FaceRecognizer)
