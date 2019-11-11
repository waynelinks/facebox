import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import useForm from 'react-hook-form'

import './index.css'
// import { image_API_call } from '../../actions'

const ImageInput = ({ image_API_call }) => {
  const { register, handleSubmit } = useForm()
  const name = 'wayne'
  const onSubmit = name => image_API_call(name)

  return (
    <Fragment>
      <div className='imageForm-container'>
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
  // { image_API_call }
)(ImageInput)
