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
	let excerptDetails = '';
	if (bookDetails.excerpts && bookDetails.excerpts.length > 0) {
		let excerpt = bookDetails.excerpts[0];
		if (excerpt.value) {
			excerptDetails = excerpt.value;
		} else if (excerpt.excerpt) {
			excerpt = excerpt.excerpt;
			if (excerpt.value) {
				excerptDetails = excerpt.value;
			} else {
				excerptDetails = excerpt;
			}
		}
	}
	return (
		<div>
			{/* <img
				// make this dynamic
				src={`https://covers.openlibrary.org/b/isbn/${bookDetails.covers[0]}-L.jpg`}
				alt='book cover'
			/> */}
			{bookDetails.covers ? (
				// bookDetails.covers.map((cover) => {
				// 	return (
				// 	<img src={`http://covers.openlibrary.org/b/id/${cover}-M.jpg`}>)
				// }
				<img
					// make this dynamic
					src={`http://covers.openlibrary.org/b/id/${
						bookDetails.covers[bookDetails.covers.length - 1]
					}-L.jpg`}
					alt='book cover'
				/>
			) : (
				' '
			)}
			<h4>{bookDetails.title}</h4>
			<h5>{excerptDetails}</h5>
			{bookDetails.description ? <p>{bookDetails.description.value}</p> : ''}
		</div>
	);
};

export default BookDetails;
