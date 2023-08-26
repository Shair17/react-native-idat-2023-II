import { useState, useEffect } from 'react';

// Hackaton (HOOKS):
// 1. Hacer un contador con los operadores de (+, -, *, /, %) y para cada uno de ellos crear una función por aparte
// 2. Hacer un reloj y que se actualice cada segundo, usar useEffect y useState
// 3. Hacer una lista de tareas, usar useState y cada que se actualicen las tareas mostrarlas por consola además de la interfaz

function ContadorBoton() {
	const [contador, setContador] = useState(0);

	useEffect(() => {
		console.log('El componente se montó');

		return () => {
			console.log('El componente se desmontó');
		};
	}, []);

	useEffect(() => {
		console.log('el contador aumentó', contador);
	}, [contador]);

	const manejarAumento = () => {
		setContador(contador + 1);
	};

	return (
		<div>
			<h1>Contador: {contador}</h1>

			<button onClick={manejarAumento}>Aumentar +1</button>
		</div>
	);
}

function App() {
	const [esVisible, setEsVisible] = useState(true);

	return (
		<div className="contenedor">
			<button
				style={{ marginBottom: 100 }}
				onClick={() => {
					setEsVisible(!esVisible);
				}}
			>
				{esVisible ? 'Ocultar' : 'Mostrar'} contador
			</button>

			{esVisible ? <ContadorBoton /> : null}
		</div>
	);
}

export default App;
