import React, { Component } from 'react';
import './ItemAddForm.css';

export default class ItemAddForm extends Component {
	state = {
		label: ''
	};
	
	onLabelChange = (event) => {
		this.setState({
			label: event.target.value
		});
	};

	onSubmit = (event) => {
		event.preventDefault();
		this.props.onAdded(this.state.label);
		this.setState({
			label: ''
		});
	};
	render() {
		return (
			<form className="item-add-form"
						onSubmit={this.onSubmit}>
				<input type="text"
							 className="form-control"
							 onChange={this.onLabelChange}
							 placeholder="Что нужно сделать?" 
							 value={this.state.label}/>
				<button 
				className="btn btn-outline-primary"
				>Добавить задачу</button>
			</form>
		);
	};
};