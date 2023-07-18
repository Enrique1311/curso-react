import React, { useEffect, useState } from "react";

const ScrollHooks = () => {
	const [scrollY, setScrollY] = useState(0);

	useEffect(() => {
		console.log("Moviendo el scroll");
		const detectScroll = () => setScrollY(window.scrollY);

		window.addEventListener("scroll", detectScroll);

		return () => {
			window.removeEventListener("scroll", detectScroll);
		};
	}, [scrollY]);

	useEffect(() => {
		console.log("Fase de montaje");
	}, []);

	useEffect(() => {
		console.log("Fase de actualización");
	});

	useEffect(() => {
		return () => {
			console.log("Fase de Desmontaje");
		};
	});

	return (
		<>
			<h2>Hooks - useEffect y el ciclo de vida</h2>
			<p>Scroll Y del navegador: {scrollY}px</p>
		</>
	);
};

export default ScrollHooks;
