import React from 'react';
import './AppHeader.css';

const AppHeader = ({todo, done}) => {

	return (
		<div>
			<h1>Just Do It</h1>
			<p className="app-header-subtitle"><span>{todo}</span> еще нужно сделать, <span>{done}</span> сделано</p>
		</div>
		
	);
};

export default AppHeader;