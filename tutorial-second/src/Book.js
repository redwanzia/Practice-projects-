import React, { Component } from 'react';

class Book extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 1,
			name: 'bob',
			showInfo: true
		};
	}

	handleInfo = () => {
		this.setState({
			showInfo: !this.state.showInfo
		});
	};

	render() {
		const { id, img, title, author } = this.props.info;
		const checkInfo = (info) => {
			if (info === true) {
				return <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iusto.</p>;
			} else {
				return null;
			}
		};
		return (
			<article className='book'>
				<img src={img} alt='book' />
				<div>
					<h3>Title: {title} </h3>
					<h5>Author: {author} </h5>
					<button onClick={this.handleInfo} type='button'>
						Toggle Info
					</button>
					{checkInfo(this.state.showInfo)}
				</div>
			</article>
		);
	}
}

export default Book;
//&&
// {this.state.showInfo && <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, nostrum.</p>}

// && ternary

// {this.state.showInfo ? (
// 	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iusto.</p>
// ) : null}
