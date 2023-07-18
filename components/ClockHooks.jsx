import React, { useEffect, useState } from "react";

const MyClock = ({ hour }) => <h3>{hour}</h3>;

const ClockHooks = () => {
	const [hour, setHour] = useState(new Date().toLocaleTimeString());
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		let timer;

		if (visible) {
			timer = setInterval(() => {
				setHour(new Date().toLocaleTimeString());
			}, 1000);
		} else {
			clearInterval(timer);
		}
		return () => {
			console.log("Fase de desmontaje");
			clearInterval(timer);
		};
	}, [visible]);

	return (
		<>
			<h2>Reloj con Hooks</h2>
			{visible && <MyClock hour={hour} />}
			<button onClick={() => setVisible(true)}>Iniciar</button>
			<button
				onClick={() => {
					setVisible(false);
				}}
			>
				Detener
			</button>
		</>
	);
};

export default ClockHooks;
