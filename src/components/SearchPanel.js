import React from 'react';

const SearchPanel = () => {
	const searchStyle = {
		fontSize: '20px',
		backgroundColor: 'violet'
	};
	return <input 
		style={ searchStyle } 
		placeholder=""/>;
};

export default SearchPanel;