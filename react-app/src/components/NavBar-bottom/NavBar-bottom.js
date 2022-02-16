import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar-bottom.css';

const NavBarBottom = () => {
	return (
		<ul className='navbar-bottom'>
			<div className='navbar-bottom-left'>
				<li className='logo'><Link to='/'><img src='https://patch.com/img/cdn/users/22867396/2015/11/raw/2015115642a47f57fa7.jpeg' alt='scouttit-logo' style={{ height: '50px', padding: '0 10px 0 0' }} /></Link></li>
				<li><Link to='/' style={{ color: 'black' }}>Scouttit</Link></li>
			</div>
		</ul>
	)
};

export default NavBarBottom;