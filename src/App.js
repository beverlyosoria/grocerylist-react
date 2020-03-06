import React, { Component } from 'react';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			newItem: '',
			list: []
		};
	}
	render() {
		return (
			<div className="App">
				<div>
					Add an Item...
					<br />
				</div>
				<input
					type="text"
					placeholder="Type item here..."
					value={this.state.newItem}
					onChange={(e) => this.updateInput('newItem', e.target.value)}
				/>
				<button onclick={() => this.addItem()}>Add</button>
			</div>
		);
	}
}

export default App;
