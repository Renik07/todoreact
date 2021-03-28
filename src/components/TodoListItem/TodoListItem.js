import React, {Component} from 'react';
import './TodoListItem.css';

export default class TodoListItem extends Component {

	render() {
		const { label, onDeleted, onToggleImportant, 
						onToggleDone, important, done } = this.props;

		let classNames = 'flex-grow-1';
		if (done) {
			classNames += ' done';
		}
		if (important) {
			classNames += ' important';
		}
	
		return (
			<span className='todo-list-item'>
				<span 
					className={classNames}
					onClick = { onToggleDone }>
					{ label }
				</span>
				<button 
					className="btn btn-outline-danger"
					onClick={onDeleted}
					>❌</button>
				<button 
					className="btn btn-outline-success"
					onClick={ onToggleImportant }
					>✅</button>
			</span>
		);
	}
}