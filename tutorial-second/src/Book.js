import React, { Component } from 'react';

class Book extends Component {
	render() {
		// console.log(this.props);

		const { img, title, author } = this.props.info;

		return (
			<article>
				<img src={img} alt='book' />
				<h3>Title: {title} </h3>
				<h5>Author: {author} </h5>
			</article>
		);
	}
}

export default Book;
