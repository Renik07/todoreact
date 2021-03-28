import React, {Component} from 'react';
import './SearchPanel.css';

export default class SearchPanel extends Component {
	buttons = [
		{ name: 'all', label: 'All'},
		{ name: 'active', label: 'Active'},
		{ name: 'done', label: 'Done'}
	];

	state = {
		term: ''
	};
	onSearchTodo = (event) => {
		const term = event.target.value;
		this.setState({ term });
		this.props.onSearchTodo(term);
	};


	render() {
		const { filter, onFilterChange } = this.props;
		const buttons = this.buttons.map(({name, label}) => {
			const isActive = filter === name;
			const classBtn = isActive ? "btn-primary" : "btn-outline-primary";
			return (
				<button 
					className={`btn ${classBtn}`}
					key={name}
					onClick={() => onFilterChange(name)}>
				{ label }
				</button>
			);
		});
		return (
		<div className="d-flex input-group">
			<input className="flex-grow-1 form-control" 
						 placeholder="Поиск задач"
						 onChange={this.onSearchTodo} 
						 value={this.state.term}/>
			{buttons}
		</div>
		);
	}
};