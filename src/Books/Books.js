import React, { useState, useEffect } from 'react';

const Books = () => {
	const books = [
		'Valis',
		'Ubik',
		'Do Androids Dream of Electric Sheep',
		'A Scanner Darkly',
	];
	const [booksJson, setBooksJson] = useState([]);
	useEffect(() => {
		const url = 'https://openlibrary.org/search.json?author=philip+k+dick';
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setBooksJson(res.docs);
			})
			.catch((err) => console.log(err));
	});
	let cards = booksJson.map((book) => {
		return <div>{book.title}</div>;
	});
	return <div>{cards}</div>;
};

export default Books;
