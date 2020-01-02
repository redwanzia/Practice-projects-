// name imports and default import/ exports
//only one default per module
// think of modules as files

import React, { Component } from 'react';

import BookList from './BookList';

const App = () => (
	<section>
		<h1>Content Here</h1>
		<BookList />
	</section>
);

export default App;
