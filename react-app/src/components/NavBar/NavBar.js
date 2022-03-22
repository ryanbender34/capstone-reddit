import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginSignup from '../auth/LoginSignup';
import './NavBar.css';
import SearchBar from '../SearchBar/searchbar';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <div>
      <nav>
        <ul className='site-options'>
          <li className="home topnav" >
            <NavLink to='/'><img className="logo" src='https://patch.com/img/cdn/users/22867396/2015/11/raw/2015115642a47f57fa7.jpeg' alt='scouttit-logo' style={{ height: '50px', padding: '0 10px 0 0' }} /></NavLink>
            <NavLink className='scouttit-link' to='/'>Scouttit</NavLink>
            <NavLink className='about-link' to='/about'>About</NavLink>
          </li>
          <li className='topnav'>
            <NavLink to={`/categories/1`} exact={true}>
              Basketball
            </NavLink>
          </li>
          <li className='topnav'>
            <NavLink to={`/categories/2`} exact={true}>
              Football
            </NavLink>
          </li>
          <li className='topnav'>
            <NavLink to={`/categories/3`} exact={true}>
              Baseball
            </NavLink>
          </li>
        <SearchBar></SearchBar>
        </ul>
        <ul className='user-options'>
          {/* {(user) ? <NavLink className='logged-in' to={`/users/${user.id}`}>Welcome, {user.username}!</NavLink> : ''} */}
          {(user) ? <div>Welcome, {user.username}</div> : ''}
          {(user) ? <div className='logged-in'>|</div> : ''}
          {(user) ? <LogoutButton /> : <LoginSignup />}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
