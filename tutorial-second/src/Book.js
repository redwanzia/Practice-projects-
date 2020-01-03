import React, { Component } from 'react';

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
			name: 'bob'
		};
		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick() {
	// 	console.log('Button Clicked');
	// 	console.log(this.state.count);
	// }

	addCount = () => {
		this.setState({
			count: this.state.count + 1
		});
	};

	render() {
		// console.log(this.props);

		const { id, img, title, author } = this.props.info;
		const { handleDelete } = this.props;

		return (
			<article className='book'>
				<img src={img} alt='book' />

				<div>
					<h3>Title: {title} </h3>
					<h5>Author: {author} </h5>
					<button onClick={() => handleDelete(id)} type='button'>
						Delete
					</button>
				</div>
			</article>
		);
	}
}

export default Book;
