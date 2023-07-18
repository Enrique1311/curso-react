import React from "react";
import PropTypes from "prop-types";

export default function Properties(props) {
	return (
		<>
			<h2>{props.porDefecto}</h2>
			<ul>
				<li>{props.myString}</li>
				<li>{props.myNumber}</li>
				<li>{props.myBoolean ? "true" : "false"}</li>
				<li>{props.myArray.join(" - ")}</li>
				<li>{`${props.myObject.name} - ${props.myObject.age}`}</li>
				<li>{props.myArray.map(props.myFunction).join(" - ")}</li>
				<li>{props.myReactElement}</li>
				<li>{props.myReactComponent}</li>
			</ul>
		</>
	);
}

// Asigna propiededes por defecto
Properties.defaultProps = {
	porDefecto: "Las Props por defecto",
};

// Asigna el tipo de dato que va a recibir la propiedad y si es requerida
Properties.propTypes = {
	number: PropTypes.number.isRequired,
	string: PropTypes.string,
};
