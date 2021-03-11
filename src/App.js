import logo from './logo.svg';
import './App.css';
import Header from './Header';
import SideBar from './Books/SideBar';
import BookDetails from './Books/BookDetails';
import { Route, Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<div className='profilePicture'>
				<img
					src='https://litreactor.com/sites/default/files/imagecache/header/images/column/headers/philip-k-dick-primer.jpg'
					alt='Photograph of Philip K Dick'
					width='250px'
				/>{' '}
				<img
					src='https://litreactor.com/sites/default/files/imagecache/header/images/column/headers/philip-k-dick-primer.jpg'
					alt='Photograph of Philip K Dick'
					width='250px'
				/>
			</div>
			<div className='header'>
				<Header />
			</div>
			<nav>
				<Route path='/' component={SideBar} />
			</nav>
			<main>
				<Route path='/:book' component={BookDetails} />
			</main>
		</div>
	);
}

export default App;
