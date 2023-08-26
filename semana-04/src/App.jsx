import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="contenedor">
			<h1>Mi proyecto con ReactJS</h1>

			<img src="https://source.unsplash.com/random/?night" alt="Imagen" />
		</div>
	);
}

export default App;
