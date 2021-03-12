import React, { useState, useEffect } from 'react';
const BookDetails = ({ match }) => {
	const [bookDetails, setBookDetails] = useState([]);
	console.log(match.params.book);
	useEffect(() => {
		const url = `https://openlibrary.org/works/${match.params.book}.json`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setBookDetails(res);
			});
	}, [match.params.book]);
	console.log(bookDetails);
	if (!bookDetails) {
		return null;
	}
	return (
		<div>
			<img
				src='http://covers.openlibrary.org/b/isbn/0425050513-L.jpg'
				alt='book cover'
			/>
			<h4>{bookDetails.title}</h4>
			{bookDetails.description ? <p>{bookDetails.description.value}</p> : ''}
		</div>
	);
};

export default BookDetails;
