import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import useForm from 'react-hook-form'

// import { image_API_call } from '../../actions'

const ImageInput = ({ image_API_call }) => {
  const { register, handleSubmit } = useForm()
  const name = 'wayne'
  const onSubmit = name => image_API_call(name)

  return (
    <Fragment>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input type='name' placeholder='name' name='name' ref={register} />

          <input type='submit' />
        </form>
      </div>
    </Fragment>
  )
}

export default connect(
  null,
  // { image_API_call }
)(ImageInput)
