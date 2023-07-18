import React, { Component } from "react";
import data from "../helpers/data.json";

function ListElement(props) {
	return (
		<li>
			<a
				href={props.el.web}
				target="_blank"
			>
				{props.el.name}
			</a>
		</li>
	);
}

export default class ElementsRendering extends Component {
	constructor(props) {
		super(props);
		this.state = {
			seasons: ["Primaver", "Verano", "Otoño", "Invierno"],
		};
	}
	render() {
		return (
			<>
				<h2>Renderizado de elementos</h2>
				<h3>Estaciones del año</h3>
				<ol>
					{this.state.seasons.map((el) => (
						<li key={el}>{el}</li>
					))}
				</ol>
				<h3>Frameworks Frontend de JavaScript</h3>
				<ul>
					{data.frameworks.map((el) => (
						<ListElement
							key={el.id}
							el={el}
						/>
					))}
				</ul>
			</>
		);
	}
}
