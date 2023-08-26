import { useEffect, useState } from 'react';

export const Reloj = () => {
	const [tiempo, setTiempo] = useState(new Date());

	useEffect(() => {
		setInterval(() => {
			setTiempo(new Date());
		}, 1000);

		return () => {};
	}, []);

	return (
		<div>
			<p>Hora actual: {tiempo.toLocaleTimeString()}</p>
		</div>
	);
};
