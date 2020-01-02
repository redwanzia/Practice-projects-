import React, { Component } from 'react';

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1
		};
		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick() {
	// 	console.log('Button Clicked');
	// 	console.log(this.state.count);
	// }

	handleClick = () => {
		console.log('Button Clicked with arrow function ');
		console.log(this.state.count);
	};

	render() {
		// console.log(this.props);

		const { img, title, author } = this.props.info;

		return (
			<article className='book'>
				<img src={img} alt='book' />

				<div>
					<h3>Title: {title} </h3>
					<h5>Author: {author} </h5>
					<button type='button' onClick={this.handleClick}>
						Add Count
					</button>
				</div>
			</article>
		);
	}
}

export default Book;
