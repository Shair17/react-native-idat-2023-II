import { Contador } from './Contador';
import { Reloj } from './Reloj';
import { Tareas } from './Tareas';

// Hackaton (HOOKS):
// 1. Hacer un contador con los operadores de (+, -, *, /, %) y para cada uno de ellos crear una función por aparte
// 2. Hacer un reloj y que se actualice cada segundo, usar useEffect y useState
// 3. Hacer una lista de tareas, usar useState y cada que se actualicen las tareas mostrarlas por consola además de la interfaz

function App() {
	return (
		<div className="contenedor">
			<Contador />

			<Reloj />

			<Tareas />
		</div>
	);
}

export default App;
