import React, { Component } from 'react';

import './App.css';

class App extends Component {
	state = {
		todos: [ 'First Item', 'second item' ],
		inputValue: ''
	};
	//the only thing this should handle is the todo to state
	handleCreateTodo = (todo) => {
		this.setState({
			todos: [ todo, ...this.state.todos ]
		});
	};
	handleSubmit = (event) => {
		event.preventDefault();
		this.handleCreateTodo(this.state.inputValue);
		this.setState({
			inputValue: ''
		});
	};
	handleOnChange = (event) => {
		this.setState({
			inputValue: event.target.value
		});
	};

	render() {
		const renderedTodos = this.state.todos.map((item, index) => {
			return (
				<li key={index} className="todo">
					{item}
				</li>
			);
		});
		return (
			<div className="App">
				<ul className="todos">{renderedTodos}</ul>
				<form className="add-form" onSubmit={this.handleSubmit}>
					<input type="text" onChange={this.handleOnChange} value={this.state.inputValue} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default App;
