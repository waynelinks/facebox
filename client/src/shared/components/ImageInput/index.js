import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import useForm from 'react-hook-form'

import './index.css'
import Rank from '../Rank'
import Welcome from '../Welcome'
import { imageApiCall } from '../../redux/actions/image'

const ImageInput = ({ imageApiCall, id }) => {
  const { register, handleSubmit } = useForm()
  const onSubmit = image_input => imageApiCall({image_input, id})

  return (
    <Fragment>
      <div className='imageForm-container'>
        <Welcome />
        <Rank />
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type='text'
            placeholder='Enter image url'
            name='image_input'
            ref={register}
          />

          <button>Submit</button>
        </form>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({users}) => ({
  id: users.response.id
})


export default connect(
  mapStateToProps,
  { imageApiCall }
)(ImageInput)
