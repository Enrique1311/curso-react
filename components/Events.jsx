import React, { Component } from "react";

export class EventsES6 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 0,
		};
		// Enlaza el metodo add al this de la clase
		this.add = this.add.bind(this);
		this.substract = this.substract.bind(this);
	}

	add(ev) {
		this.setState({ counter: this.state.counter + 1 });
	}

	substract(ev) {
		this.setState({ counter: this.state.counter - 1 });
	}

	render() {
		return (
			<>
				<h2>Eventos en componentes de clase ES6</h2>{" "}
				<nav>
					<button onClick={this.add}>+</button>
					<button onClick={this.substract}>-</button>
				</nav>
				<h3>{this.state.counter}</h3>
			</>
		);
	}
}

// Properties Initializer
export class EventsES7 extends Component {
	state = {
		counter: 0,
	};

	// Arrow functions: heredan el this de la función donde se encuentran
	add = (ev) => {
		this.setState({ counter: this.state.counter + 1 });
	};

	substract = (ev) => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<>
				<h2>Eventos en componentes de clase</h2>{" "}
				<nav>
					<button onClick={this.add}>+</button>
					<button onClick={this.substract}>-</button>
				</nav>
				<h3>{this.state.counter}</h3>
			</>
		);
	}
}

// Evento personalizado
// function MyButton(props) {
// 	return <button onClick={props.myOnClick}>Componente botón</button>;
// }

// const MyButton = (props) => (
// 	<button onClick={props.myOnClick}>Componente botón</button>
// );

const MyButton = ({ myOnClick }) => (
	<button onClick={myOnClick}>Componente botón</button>
);

export class PlusAboutEvents extends Component {
	handleClick = (ev, message) => {
		console.log(ev.target);
		console.log(message);
	};

	render() {
		return (
			<>
				<h2>Más sobre eventos</h2>
				<button
					myOnClick={(ev) =>
						this.handleClick(ev, "Pasando parámetro desde un evento")
					}
				>
					Saludar
				</button>
				<MyButton
					myOnClick={(ev) =>
						this.handleClick(ev, "Pasando parámetro desde un evento")
					}
				/>
			</>
		);
	}
}
