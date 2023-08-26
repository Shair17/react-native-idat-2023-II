import { useState } from 'react';

export const Contador = () => {
	const [contador, setContador] = useState(0);

	const sumar = () => {
		setContador(contador + 1);
	};

	const restar = () => {
		setContador(contador - 1);
	};

	const multiplicar = () => {
		setContador(contador * 2);
	};

	const dividir = () => {
		setContador(contador / 2);
	};

	const resetear = () => {
		setContador(0);
	};

	return (
		<div>
			<h1>Contador: {contador}</h1>

			<div className="contenedorBotones">
				<button onClick={sumar}>Sumar</button>
				<button onClick={restar}>Restar</button>
				<button onClick={multiplicar}>Multiplicar</button>
				<button onClick={dividir}>Dividir</button>
				<button onClick={resetear}>Resetear</button>
			</div>
		</div>
	);
};
