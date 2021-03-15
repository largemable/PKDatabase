import './App.css';
import Header from './Header';
import SideBar from './Books/SideBar';
import BookDetails from './Books/BookDetails';
import { Route } from 'react-router-dom';
import About from './About/About';
import Home from './Home';

function App() {
	return (
		<div className='App'>
			<div className='header'>
				<Header />
			</div>
			<nav>
				<Route path='/' component={SideBar} />
			</nav>
			<main>
				<Route path='/' exact component={Home} />
				<Route path='/about' component={About} />
				<Route
					path='/book/:book'
					render={(routerProps) => <BookDetails match={routerProps.match} />}
				/>
			</main>
			<footer>
				<p>
					The content on this website was sourced using the{' '}
					<a href='http://openlibrary.org' target='_blank' rel='noreferrer'>
						Open Library
					</a>{' '}
					API. App created by Mable Palombo, 2021
				</p>
			</footer>
		</div>
	);
}

export default App;
