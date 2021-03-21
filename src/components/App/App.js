import React from 'react';

import AppHeader from '../AppHeader';
import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';

import './App.css';

const App = () => {

	const todoData = [
		{label: "Drink Coffee", important: false, id: 1},
		{label: "Build React App", important: true, id: 2},
		{label: "Learn English", important: false, id: 3}
	];
	return (
		<div>
			<AppHeader />
			<SearchPanel />
			<TodoList todos={todoData} />
		</div>
	);
};

export default App;