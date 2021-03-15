import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<header>
				<h1 className='title'>PKDb</h1>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h4 className='header_button'>HOME</h4>
				</Link>
				<Link to='/about' style={{ textDecoration: 'none' }}>
					<h4 className='header_button'>ABOUT</h4>
				</Link>
			</header>
		</div>
	);
};

export default Header;
