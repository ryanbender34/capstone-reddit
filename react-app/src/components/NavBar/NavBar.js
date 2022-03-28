import React, {useState, useEffect} from 'react';
import { useSelector} from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import LoginSignup from '../auth/LoginSignup';
import './NavBar.css';
import SearchBar from '../SearchBar/searchbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const location = useLocation();
  const [menuToggle, setMenuToggle] = useState(false);
  const allCategories = useSelector(state => state.categories);
  delete allCategories["active"]
  const allCategoriesArr = Object.values(allCategories)
  // window.addEventListener('mouseup', function(e) {
  //   if ((e.target != document.querySelector('.sports-dropdown')) && (e.target != document.querySelector('.menu-btn'))) {
  //     setMenuToggle(false)
  //   }
  // })
  useEffect(() => {
    setMenuToggle(false)
  }, [location])

  return (
    <div>
      <nav>
        <ul className='site-options'>
          <li className="home topnav" >
            <NavLink to='/'><img className="logo" src='https://patch.com/img/cdn/users/22867396/2015/11/raw/2015115642a47f57fa7.jpeg' alt='scouttit-logo' style={{ height: '50px', padding: '0 10px 0 0' }} /></NavLink>
            <NavLink className='scouttit-link' to='/'>Scouttit</NavLink>
          </li>
          <li className="menu-dropdown-container">
            <button className='menu-btn' onClick={() => setMenuToggle(!menuToggle)}>
              <FontAwesomeIcon className='home-icon' icon={faHome} />
              <div>Home</div>
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
            <ul className="sports-dropdown" hidden={!menuToggle}>
              {menuToggle && allCategoriesArr.map(category => {
                return (
                <>
                  <li key={`sport-${category.id}`} className='sport-li'>
                    <NavLink to={`/categories/${category.id}`} className='sport' onClick={() => setMenuToggle(false)} exact={true}>
                      <span className='sport-text'>{category.name}</span>
                    </NavLink>
                  </li>
                </>
                )
              })}
            </ul>
          </li>
          <SearchBar className="nav-search"></SearchBar>
        </ul>
        <ul className='user-options'>
          <NavLink className='about-link' to='/about'>About</NavLink>
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
