import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './auth.css';


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = (e) => {
    e.preventDefault();
    setErrors([])
    if (password === repeatPassword) {
      dispatch(signUp(username, email, password)).then((res) => {
          if (res?.errors) setErrors(res.errors)
        })
    } else {
      setErrors(["Password and repeat do not match"])
    }
  };


  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='signup-body'>
      <form className='auth-form' onSubmit={onSignUp}>
        <input type="hidden" name="csrf_token" value={Cookies.get('XSRF-TOKEN')} />
        {(errors.length > 0) &&
          <div>
            {errors.map((error, ind) => (
              <div className="auth-errors" key={`error-${ind}`}>{error}</div>
            ))}
          </div>
        }
        <div>
          <label>User Name </label>
          <input className='auth-input' type='text' name='username' onChange={updateUsername} value={username} required></input>
        </div>
        <label>Email</label>
        <input type='text' className='auth-input' name='email' onChange={updateEmail} value={email} required></input>
  
          <label>Password</label>
          <input
            type='password'
            name='password'
            className='auth-input'
            onChange={updatePassword}
            value={password}
          ></input>
          <label>Repeat Password</label>
          <input
            type='password'
            name='repeat_password'
            className='auth-input'
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>

        <button type='submit' className='auth-btn'>Sign Up</button>
      </form>

    </div>
  );
};

export default SignUpForm;
