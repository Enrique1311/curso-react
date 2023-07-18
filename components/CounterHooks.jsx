import React, { useState } from "react";

const CounterHooks = (props) => {
	const [counter, setCounter] = useState(0);

	const add = () => {
		setCounter(counter + 1);
	};

	const substract = () => {
		setCounter(counter - 1);
	};

	return (
		<>
			<h2>Hooks - useState</h2>
			<nav>
				<button onClick={add}>+</button>
				<button onClick={substract}>-</button>
			</nav>
			<p>Contador de {props.title}</p>
			<h3>{counter}</h3>
		</>
	);
};

CounterHooks.defaultProps = {
	title: "Clicks",
};

export default CounterHooks;
