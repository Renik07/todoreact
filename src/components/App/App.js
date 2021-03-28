import React, { Component } from 'react';

import AppHeader from '../AppHeader';
import TodoList from '../TodoList';
import SearchPanel from '../SearchPanel';
import ItemAddForm from '../ItemAddForm';

import './App.css';

export default class App extends Component {
	/* генератор случайного id */
	maxId = 100;

	constructor() {
		super();
		
		this.state = {
			todoData: [
				this.createTodoItem("Drink Coffee"),
				this.createTodoItem("Build React App"),
				this.createTodoItem("Learn English")
			],
			term: '',
			filter: 'all'
		}
	};
	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			id: this.maxId++
		};
	}
	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((elem) => elem.id === id);
			// создаем новый объект с обновленным свойством
			const oldItem = arr[idx];
			const newItem = {...oldItem, [propName]: !oldItem[propName]};
			// новый массив
			return [
				...arr.slice(0, idx),
				newItem,
				...arr.slice(idx + 1)
			];
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((elem) => elem.id === id);

			const newArr = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)];
			return {
				todoData: newArr
			};
		});
	};
	addItem = (text) => {
		const newItem = this.createTodoItem(text);

		this.setState(({ todoData }) => {
			const newArray = [...todoData, newItem];
			return {
				todoData: newArray
			};
		});
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};
	search(items, term) {
		if (term.length === 0) {
			return items;
		}
		return items.filter((item) => {
			return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
		});
	};
	
	filter(items, filter) {
		switch(filter) {
			case 'all':
				return items;
			case 'active':
				return items.filter((item) => !item.done);
			case 'done':
				return items.filter((item) => item.done);
			default:
				return items;
		} 
	};
	onSearchTodo = (term) => {
		this.setState({ term });
	};
	onFilterChange = (filter) => {
		this.setState({ filter });
	};

	render() {
		const { todoData, term, filter } = this.state;
		const visibleItems = this.filter(this.search(todoData, term), filter);

		const doneCount = todoData
			.filter((elem) => elem.done).length;
		const todoCount = todoData.length - doneCount;
		
		return (
			<div>
				<AppHeader todo={todoCount} done={doneCount}/>
				<SearchPanel 
					onSearchTodo={this.onSearchTodo}
					filter={filter} 
					onFilterChange={this.onFilterChange}/>
				<TodoList 
					todos={visibleItems} 
					onDeleted={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleDone={this.onToggleDone}/>
				<ItemAddForm 
				onAdded={this.addItem}
				/>
			</div>
		);
	}
	
};