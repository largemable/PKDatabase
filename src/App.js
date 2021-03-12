import './App.css';
import Header from './Header';
import SideBar from './Books/SideBar';
import BookDetails from './Books/BookDetails';
import { Route, Link } from 'react-router-dom';
import About from './About/About';
import Home from './Home';
import image from './pkd-background.jpg';
function App() {
	return (
		<div className='App'>
			<div className='about'>
				<img src={image} alt='portrait of the author' width='100%' />
				<Link to='/About' style={{ textDecoration: 'none' }}>
					<h4>ABOUT PHILIP K DICK</h4>
				</Link>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<h4>HOME</h4>
				</Link>
			</div>
			<div className='header'>
				<Header />
			</div>
			<nav>
				<Route path='/' component={SideBar} />
			</nav>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/About' exact component={About} />
				<Route
					path='/:book'
					render={(routerProps) => <BookDetails match={routerProps.match} />}
				/>
			</main>
			<footer>
				<a href='http://openlibrary.org' target='_blank'>
					Open Library
				</a>
			</footer>
		</div>
	);
}

export default App;
