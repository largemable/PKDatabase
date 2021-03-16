import React, { useState, useEffect } from 'react';
const BookDetails = ({ match }) => {
	const [bookDetails, setBookDetails] = useState([]);
	// console.log(match.params.book);
	useEffect(() => {
		const url = `https://openlibrary.org/works/${match.params.book}.json`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setBookDetails(res);
			});
	}, [match.params.book]);

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
		<div className='book-details'>
			{bookDetails.covers ? (
				<img
					src={`http://covers.openlibrary.org/b/id/${
						bookDetails.covers[bookDetails.covers.length - 1]
					}-L.jpg`}
					alt='book cover'
				/>
			) : (
				' '
			)}
			<div className='book-description'>
				<h4>{bookDetails.title}</h4>
				<h5>{excerptDetails}</h5>
				{bookDetails.description ? <p>{bookDetails.description.value}</p> : ''}
			</div>
		</div>
	);
};

export default BookDetails;
