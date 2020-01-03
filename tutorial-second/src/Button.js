import React from 'react';

function Button({ handleDelete }) {
	return (
		<button onClick={handleDelete} type='button' style={{ background: 'red' }}>
			Add Count
		</button>
	);
}

export default Button;
