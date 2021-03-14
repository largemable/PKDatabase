//NOTES

example url of a PKD book: 'https://openlibrary.org/works/OL2172528W.json'

current roadblock is getting that key to work in my next API call... tried routerProps.match but it's only getting the works/ out of the key for some reason. once I get that figured out the API call should be fairly simple and so should fetching the data. I could also approach it using .find or some other method.

//SOLVED!

right now I'm having trouble loading my pages. my book details won't load unless i refresh the page. additionally, sometimes the data isn't read, like when I am trying to load a new book up, I get the error "cannot read property value of 'undefined' " but that isn't consistent and I also double checked the API and the value definitely exists.

//SOLVED!

//ISSUE

One book is not rendering, error reads as follows-

×
Error: Objects are not valid as a React child (found: object with keys {type, value}). If you meant to render a collection of children, use an array instead.
▶ 20 stack frames were collapsed.
(anonymous function)
src/Books/BookDetails.js:11
8 | .then((res) => res.json())
9 | .then((res) => {
10 | console.log(res);

> 11 | setBookDetails(res);

     | ^  12 | 		});

13 | }, [match.params.book]);
14 | console.log(bookDetails);
View compiled
This screen is visible only in development. It will not appear if the app crashes in production.
Open your browser’s developer console to further inspect this error. Click the 'X' or hit ESC to dismiss this message.

//next steps
// filter the fetch further so that it does not return anything that doesn't have a description value
// add cover images to bookDetails
// fill in the About component and create the proper routes and links
//dynamically change the background color based on the book cover (too crazy?)
