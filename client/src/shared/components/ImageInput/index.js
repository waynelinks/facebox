import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import useForm from 'react-hook-form'

import './index.css'
import Rank from '../Rank'
import Welcome from '../Welcome'
import { clarifaiAPIcall } from '../../redux/actions'

const ImageInput = ({ clarifaiAPIcall }) => {
  const { register, handleSubmit } = useForm()
  const name = 'wayne'
  const onSubmit = url => clarifaiAPIcall(url)

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

export default connect(
  null
  { clarifaiAPIcall }
)(ImageInput)
