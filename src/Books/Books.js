import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Books = () => {
	const [booksJson, setBooksJson] = useState([]);
	useEffect(() => {
		const url = 'https://openlibrary.org/search.json?author=philip+k+dick';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setBooksJson(res.docs.slice(0, 51));
			})
			.catch((err) => console.log(err));
	}, []);

	let cards = booksJson.map((book) => {
		return (
			<div key={`${book.key.slice(6)}`} className='cards'>
				<Link
					to={`/book${book.key.slice(6)}`}
					key={book.key.slice(6)}
					style={{ textDecoration: 'none' }}>
					<p className='book_title'>{book.title}</p>
				</Link>
			</div>
		);
	});
	return <div>{cards}</div>;
};

export default Books;
