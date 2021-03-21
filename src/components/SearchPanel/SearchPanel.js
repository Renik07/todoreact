import React from 'react';
import './SearchPanel.css';

const SearchPanel = () => {
	
	
	return (
		<div className="d-flex input-group">
			<input className="flex-grow-1 form-control" placeholder=""/>
			<button className="btn btn-outline-primary">Все</button>
			<button className="btn btn-outline-primary">Активные</button>
			<button className="btn btn-outline-primary">Сделанные</button>
		</div>

	);
};

export default SearchPanel;