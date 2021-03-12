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
			{bookDetails.excerpts ? <h5>{bookDetails.excerpts[0].excerpt}</h5> : ''}
			{bookDetails.description ? <p>{bookDetails.description.value}</p> : ''}
		</div>
	);
};

export default BookDetails;
