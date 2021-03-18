import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/AppHeader';
import TodoList from './components/TodoList';
import SearchPanel from './components/SearchPanel';

const App = () => {
	const value = '<script>alert("")</script>';
	return (
		<div>
			{ value }
			<AppHeader />
			<SearchPanel />
			<TodoList />
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));