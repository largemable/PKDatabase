import './App.css';
import Header from './Header';
import SideBar from './Books/SideBar';
import BookDetails from './Books/BookDetails';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<div className='about'>
				<img
					src='https://litreactor.com/sites/default/files/imagecache/header/images/column/headers/philip-k-dick-primer.jpg'
					alt='Photograph of Philip K Dick'
					width='250px'
					className='profilePic'
				/>
				<h4>ABOUT PHILIP K DICK</h4>
			</div>
			<div className='header'>
				<Header />
			</div>
			<nav>
				<Route path='/' component={SideBar} />
			</nav>
			<main>
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
