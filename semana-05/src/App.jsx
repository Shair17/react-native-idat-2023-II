import { useState, useEffect } from 'react';
import { Funcional } from './components/Funcional';
import { Clase } from './components/Clase';

// componente funcional
function App() {
	const [componenteFuncionalEsVisible, setComponenteFuncionalEsVisible] =
		useState(true);
	const [contador, setContador] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setContador((prevContador) => prevContador + 1);
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, [componenteFuncionalEsVisible]);

	return (
		<div>
			{componenteFuncionalEsVisible ? (
				<Funcional contador={contador} />
			) : (
				<Clase contador={contador} />
			)}

			<br />

			<button
				onClick={() => {
					setComponenteFuncionalEsVisible(!componenteFuncionalEsVisible);
				}}
			>
				Mostrar componente{' '}
				{componenteFuncionalEsVisible ? 'clase' : 'funcional'}
			</button>
		</div>
	);
}

export default App;
