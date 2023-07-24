import React, { useEffect, useState } from "react";

function Pokemon({ avatar, name }) {
	return (
		<figure>
			<img
				src={avatar}
				alt={name}
			/>
			<figcaption>{name}</figcaption>
		</figure>
	);
}

const AjaxHooks = () => {
	const [pokemons, setPokemons] = useState([]);

	// useEffect(() => {
	// 	let url = "https://pokeapi.co/api/v2/pokemon/";
	// 	fetch(url)
	// 		.then((res) => res.json())
	// 		.then((json) => {
	// 			console.log(json);
	// 			json.results.forEach((el) => {
	// 				fetch(el.url)
	// 					.then((res) => res.json())
	// 					.then((json) => {
	// 						console.log(json);
	// 						let pokemon = {
	// 							id: json.id,
	// 							name: json.name,
	// 							avatar: json.sprites.front_default,
	// 						};
	// 						setPokemons((pokemons) => [...pokemons, pokemon]);
	// 					});
	// 			});
	// 		});
	// }, []);

	// La función del useEffect no puede ser asíncrona
	// Se debe usar una función async dentro de la función del useEffect y llamarla
	useEffect(() => {
		const getPokemons = async (url) => {
			let res = await fetch(url);
			let json = await res.json();

			json.results.forEach(async (el) => {
				let res = await fetch(el.url);
				let json = await res.json();

				let pokemon = {
					id: json.id,
					name: json.name,
					avatar: json.sprites.front_default,
				};
				setPokemons((pokemons) => [...pokemons, pokemon]);
			});
		};

		getPokemons("https://pokeapi.co/api/v2/pokemon/");
	}, []);

	return (
		<>
			<h2>Peticiones asíncronas con Hooks</h2>
			{pokemons.length === 0 ? (
				<h3>Cargando...</h3>
			) : (
				pokemons.map((el) => (
					<Pokemon
						key={el.id}
						name={el.name}
						avatar={el.avatar}
					/>
				))
			)}
		</>
	);
};

export default AjaxHooks;
