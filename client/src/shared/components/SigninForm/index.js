import React, { useState, Fragment } from 'react'
import useForm from 'react-hook-form'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import './index.css'
import Logo from '../Logo'
import { signinUser } from '../../redux/actions/users'

const SinginForm = ({ signinUser, session, error }) => {
  const { register, handleSubmit } = useForm()

  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const onSubmit = payload => signinUser(payload)

  return session ? (
    <Redirect to='/signup' />
  ) : (
    <Fragment>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Logo />
          <h3>Signin with credentials</h3>
          <div className='field-group'>
            <label className={email ? 'field-active' : ''}>Email</label>
            <input
              type='email'
              name='email'
              autoFocus
              onFocus={() => setEmail(true)}
              onBlur={emailValue === '' ? () => setEmail(false) : null}
              onChange={e => setEmailValue(e.target.value)}
              ref={register({ required: true })}
            />
          </div>
          <div className='field-group'>
            <label className={password ? 'field-active' : ''}>Password</label>
            <input
              type='password'
              name='password'
              onFocus={() => setPassword(true)}
              onBlur={passwordValue === '' ? () => setPassword(false) : null}
              onChange={e => setPasswordValue(e.target.value)}
              ref={register({
                required: true,
                pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/i
              })}
            />
          </div>
          {error && <p className='error'>{error}</p>}
          <button type='submit'>SIGN IN</button>
          {!session && (
            <Link to='/signup' className='signin2register'>
              Signup
            </Link>
          )}
        </form>
      </div>
    </Fragment>
  )
}

const mapStateToProps = ({ users, notifications }) => ({
  error: notifications.error,
  session: users.session
})

export default connect(
  mapStateToProps,
  { signinUser }
)(SinginForm)
