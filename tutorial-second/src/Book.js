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
	lowerCount = () => {
		this.setState({
			count: this.state.count - 1
		});
	};
	resetCount = () => {
		this.setState({
			count: 0
		});
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
					<h3> {this.state.count} </h3>
					<h3> {this.state.name} </h3>
					<button type='button' onClick={this.addCount}>
						Add Count{' '}
					</button>
					<button type='button' onClick={this.resetCount}>
						Reset Count{' '}
					</button>
					<button type='button' onClick={this.lowerCount}>
						Lower Count{' '}
					</button>
				</div>
			</article>
		);
	}
}

export default Book;
