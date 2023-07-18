import React, { Component } from "react";

export default class Father extends Component {
	state = {
		counter: 0,
	};

	incrementCounter = (e) => {
		this.setState({ counter: this.state.counter + 1 });
	};

	render() {
		return (
			<>
				<h2>Comunicación entre componentes</h2>
				<p>
					contador: <b>{this.state.counter}</b>
				</p>
				<Son
					incrementCounter={this.incrementCounter}
					message="Mensaje para hijo 1"
				/>
				<Son
					incrementCounter={this.incrementCounter}
					message="Mensaje para hijo 2"
				/>
			</>
		);
	}
}

function Son(props) {
	return (
		<>
			<h3>{props.message}</h3>
			<button onClick={props.incrementCounter}>+</button>
		</>
	);
}
