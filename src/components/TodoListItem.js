import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({ label, important = false }) => {
	const style = {
		color: important ? 'orange' : 'black',
		fontWeight: important ? 'bold' : 'normal'
	};

	return (
		<span className="todo-list-item" style={style}>
			<span className="flex-grow-1">{ label }</span>
			<button className="btn btn-outline-danger">❌</button>
			<button className="btn btn-outline-success">✅</button>
		
		</span>
		
	);
};

export default TodoListItem;