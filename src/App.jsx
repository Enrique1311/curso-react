import ConditionalRendering from "../components/ConditionalRendering";
import ElementsRendering from "../components/ElementsRendering";
import { EventsES6, EventsES7, PlusAboutEvents } from "../components/Events";
import MyComponent from "../components/MyComponent";
import Properties from "../components/MyProperties";
import MyState from "../components/MyState";
import ComponentsComunication from "../components/ComponentsComunication";
import Lifecycle from "../components/Lifecycle";
import AjaxApis from "../components/AjaxApis";
import CounterHooks from "../components/CounterHooks";
import ScrollHooks from "../components/ScrollHooks";
import ClockHooks from "../components/ClockHooks";

function App() {
	return (
		<>
			<h1>React - Básicos</h1>
			<hr />
			<MyComponent msg="Soy un componente funcional desde props" />
			<hr />
			<Properties
				myString="Cadena de texto"
				myNumber={20}
				myBoolean={true}
				myArray={[1, 2, 3]}
				myObject={{ name: "Enrique", age: "46" }}
				myFunction={(num) => num * num}
				myReactElement={<i>Elemento de React</i>}
				MyReactComponent={<MyComponent msg="Componente pasado como Prop" />}
			/>
			<hr />
			<MyState />
			<hr />
			<ConditionalRendering />
			<hr />
			<ElementsRendering />
			<hr />
			<EventsES6 /> <hr />
			<EventsES7 />
			<hr />
			<PlusAboutEvents />
			<hr />
			<ComponentsComunication />
			<hr />
			<Lifecycle />
			<hr />
			<AjaxApis />
			<hr />
			<CounterHooks />
			<hr />
			<ScrollHooks />
			<hr />
			<ClockHooks />
		</>
	);
}

export default App;
