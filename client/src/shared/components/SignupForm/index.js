import React, { useState, Fragment } from 'react'
import useForm from 'react-hook-form'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import './index.css'
import Logo from '../Logo'
import { signupUser } from '../../redux/actions/users'

const SingupForm = ({ signupUser, session, error }) => {
  const { register, handleSubmit } = useForm()

  const [name, setName] = useState(false)
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)

  const [nameValue, setNameValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')

  const onSubmit = payload => signupUser(payload)

  return session ? (
    <Redirect to='/' />
  ) : (
    <Fragment>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Logo />
          <h3>Signup with credentials</h3>
          <div className='field-group'>
            <label className={name ? 'field-active' : ''}>First Name</label>
            <input
              type='text'
              name='name'
              autoFocus
              onFocus={() => {
                setName(true)
                // setRegistration(false)
              }}
              onBlur={nameValue === '' ? () => setName(false) : null}
              onChange={e => setNameValue(e.target.value)}
              ref={register({ required: true, min: 2 })}
            />
          </div>
          <div className='field-group'>
            <label className={email ? 'field-active' : ''}>Email</label>
            <input
              type='email'
              name='email'
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
          <button type='submit'>SIGN UP</button>
          {!session && (
            <Link to='/signin' className='signin2register'>
              Signin
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
  { signupUser }
)(SingupForm)
