import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import useForm from 'react-hook-form'

import './index.css'
import Rank from '../Rank'
import Welcome from '../Welcome'
import { processImage } from '../../redux/actions/image'

const ImageInput = ({ processImage, id }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = ({ image }) => processImage({ image, id })

  return (
    <Fragment>
      <div className='imageForm-container'>
        <Welcome />
        <Rank />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Enter image url'
            name='image'
            ref={register}
          />

          <button>Submit</button>
        </form>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ users }) => ({
  id: users.response.id
})

export default connect(
  mapStateToProps,
  { processImage }
)(ImageInput)
