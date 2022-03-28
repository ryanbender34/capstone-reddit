import Cookies from 'js-cookie';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { login } from '../../store/session';
import { demoLogin } from '../../store/session';
import './auth.css';


const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-body'>
      <form className='auth-form' onSubmit={onLogin}>
        <input type="hidden" name="csrf_token" value={Cookies.get('XSRF-TOKEN')} />
        <div>
          {errors.map((error, ind) => (
            <div className="auth-errors" key={ind}>{error}</div>
          ))}
        </div>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
          <button type='submit'>Login</button>
          <div className="auth-btn">
            <p className="new-link">New to Scouttit?  <Link to='/sign-up' className='signup-link' ><span className='auth-link'>Sign-Up!</span></Link></p>
            <p><span className='auth-link' onClick={e => dispatch(demoLogin())}>Demo User</span></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
