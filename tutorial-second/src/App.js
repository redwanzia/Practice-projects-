// name imports and default import/ exports
//only one default per module
// think of modules as files

import React from 'react';
import './App.css';
import BookList from './BookList';

const App = () => (
	<section>
		<BookList />
	</section>
);

export default App;
