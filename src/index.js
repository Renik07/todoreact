import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

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

ReactDOM.render(<App />, document.getElementById('root'));