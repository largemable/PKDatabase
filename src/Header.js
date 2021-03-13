import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
	return (
		<div>
			<header>
				<h1>PKDb</h1>
				<Link to='/About' style={{ textDecoration: 'none' }}>
					<h4>ABOUT PHILIP K DICK</h4>
				</Link>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h4>HOME</h4>
				</Link>
			</header>
		</div>
	);
};

export default Header;
