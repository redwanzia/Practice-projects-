import React, { Component } from 'react';
import Book from './Book';

class BookList extends Component {
	render() {
		return (
			<section>
				<h3>This is our book list</h3>
				<Book />
			</section>
		);
	}
}

export default BookList;
