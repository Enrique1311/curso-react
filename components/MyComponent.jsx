import React, { Component } from "react";

// ********** Componente de Clase *********
// class MyComponent extends Component {
// 	render() {
// 		return <h2>{this.props.msg}</h2>;
// 	}
// }

// ********* Componente funcional ********
// function MyComponent(props) {
// 	return <h2>{props.msg}</h2>;
// }

// ********* Componente de función expresada (Arrow function) ************
const MyComponent = (props) => <h2>{props.msg}</h2>;

export default MyComponent;
