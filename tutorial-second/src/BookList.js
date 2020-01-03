import React, { Component } from 'react';
import Book from './Book';
import books from './BookData';

class BookList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			books: books
		};
	}

	handleDelete = () => {
		console.log('passed from grandparent bookList component');
	};

	render() {
		// const books = this.state.books.map((item) => item.book);
		// console.log(books);

		return (
			<section>
				{this.state.books.map((item) => <Book handleDelete={this.handleDelete} info={item} key={item.id} />)}
			</section>
		);
	}
}

export default BookList;
