import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginSignup from '../auth/LoginSignup';
import './NavBar.css';
import NavBarBottom from '../NavBar-bottom/NavBar-bottom';

const NavBar = () => {
  const user = useSelector(state => state.session.user)
  return (
    <div>
      <nav>
        <ul className='site-options'>
          <li>
            <NavLink to='/' exact={true} activeClassName='active'>
              <i className="fas fa-home" />
            </NavLink>
          </li>
          <li>
            <NavLink to='/basketball' exact={true}>
              Basketball
            </NavLink>
          </li>
          <li>
            <NavLink to='/football' exact={true}>
              Football
            </NavLink>
          </li>
        </ul>
        <ul className='user-options'>
          {(user) ? <NavLink className='logged-in' to={`/users/${user.id}`}>Welcome, {user.username}!</NavLink> : ''}
          {(user) ? <div className='logged-in'>|</div> : ''}
          {(user) ? <LogoutButton /> : <LoginSignup />}
        </ul>
      </nav>
      <NavBarBottom />
    </div>
  );
}

export default NavBar;
