import React, { Component } from "react";

// Pasa el estado de padre a hijo en un componente de clase
function StateToChild(props) {
	return (
		<div>
			<h3>{props.childCounter}</h3>
		</div>
	);
}

export default class MyState extends Component {
	constructor(props) {
		super(props);
		this.state = { counter: 0 };

		// setInterval(() => {
		// 	this.setState({ counter: this.state.counter + 1 });
		// }, 1000);
	}

	render() {
		return (
			<>
				<h2>El estado</h2>
				<h2>{this.state.counter}</h2>
				<StateToChild childCounter={this.state.counter} />
			</>
		);
	}
}
