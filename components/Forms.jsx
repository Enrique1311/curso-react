import React, { useState } from "react";

// const Forms = () => {
// 	const [name, setName] = useState("");
// 	const [framework, setFramework] = useState("");
// 	const [language, setLanguage] = useState("");
// 	const [terms, setTerms] = useState(false);

// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		alert("El formulario se ha enviado...");
// 	};

// 	return (
// 		<>
// 			<h2>Formularios</h2>
// 			<form onSubmit={handleSubmit}>
// 				<label htmlFor="name">Nombre:</label>
// 				<input
// 					type="text"
// 					id="name"
// 					name="name"
// 					value={name}
// 					onChange={(e) => setName(e.target.value)}
// 				/>
// 				<p>Elije tu framework favorito:</p>
// 				<input
// 					type="radio"
// 					id="react"
// 					name="framework"
// 					value="react"
// 					onChange={(e) => setFramework(e.target.value)}
// 					defaultChecked
// 				/>{" "}
// 				<label htmlFor="react">React</label>
// 				<input
// 					type="radio"
// 					id="vue"
// 					name="framework"
// 					value="vue"
// 					onChange={(e) => setFramework(e.target.value)}
// 				/>{" "}
// 				<label htmlFor="vue">Vue</label>
// 				<input
// 					type="radio"
// 					id="angular"
// 					name="framework"
// 					value="angular"
// 					onChange={(e) => setFramework(e.target.value)}
// 				/>{" "}
// 				<label htmlFor="angular">Angular</label>
// 				<input
// 					type="radio"
// 					id="svelte"
// 					name="framework"
// 					value="svelte"
// 					onChange={(e) => setFramework(e.target.value)}
// 				/>{" "}
// 				<label htmlFor="svelte">Svelte</label>
// 				<p>Elije tu lenguaje de programación favorito:</p>
// 				<select
// 					name="language"
// 					onChange={(e) => setLanguage(e.target.value)}
// 					defaultValue=""
// 				>
// 					<option value="">---</option>
// 					<option value="js">JavaScript</option>
// 					<option value="py">Python</option>
// 					<option value="php">PHP</option>
// 					<option value="java">Java</option>
// 					<option value="ruby">Ruby</option>
// 				</select>{" "}
// 				<br />
// 				<label htmlFor="terms">Acepto Términos y Condiciones</label>
// 				<input
// 					type="checkbox"
// 					id="terms"
// 					name="terms"
// 					onChange={(e) => setTerms(e.target.checked)}
// 				/>
// 				<br />
// 				<input type="submit" />
// 			</form>
// 		</>
// 	);
// };

const Forms = () => {
	const [form, setForm] = useState({});

	// Actualiza todos los input del formulario
	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleChecked = (e) => {
		setForm({ ...form, [e.target.name]: e.target.checked });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("El formulario se ha enviado...");
	};

	return (
		<>
			<h2>Formularios</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="name">Nombre:</label>
				<input
					type="text"
					id="name"
					name="name"
					// value={name}
					// onChange={(e) => setName(e.target.value)}
					value={form.name}
					onChange={handleChange}
				/>
				<p>Elije tu framework favorito:</p>
				<input
					type="radio"
					id="react"
					name="framework"
					value="react"
					// onChange={(e) => setFramework(e.target.value)}
					onChange={handleChange}
					defaultChecked
				/>{" "}
				<label htmlFor="react">React</label>
				<input
					type="radio"
					id="vue"
					name="framework"
					value="vue"
					// onChange={(e) => setFramework(e.target.value)}
					onChange={handleChange}
				/>{" "}
				<label htmlFor="vue">Vue</label>
				<input
					type="radio"
					id="angular"
					name="framework"
					value="angular"
					// onChange={(e) => setFramework(e.target.value)}
					onChange={handleChange}
				/>{" "}
				<label htmlFor="angular">Angular</label>
				<input
					type="radio"
					id="svelte"
					name="framework"
					value="svelte"
					// onChange={(e) => setFramework(e.target.value)}
					onChange={handleChange}
				/>{" "}
				<label htmlFor="svelte">Svelte</label>
				<p>Elije tu lenguaje de programación favorito:</p>
				<select
					name="language"
					// onChange={(e) => setLanguage(e.target.value)}
					onChange={handleChange}
					defaultValue=""
				>
					<option value="">---</option>
					<option value="js">JavaScript</option>
					<option value="py">Python</option>
					<option value="php">PHP</option>
					<option value="java">Java</option>
					<option value="ruby">Ruby</option>
				</select>{" "}
				<br />
				<label htmlFor="terms">Acepto Términos y Condiciones</label>
				<input
					type="checkbox"
					id="terms"
					name="terms"
					// onChange={(e) => setTerms(e.target.checked)}
					onChange={handleChecked}
				/>
				<br />
				<input type="submit" />
			</form>
		</>
	);
};

export default Forms;
