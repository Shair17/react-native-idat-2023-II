import { useState, useEffect, useRef } from 'react';

export const Tareas = () => {
	const inputRef = useRef(null);
	const [tareas, setTareas] = useState([
		{
			id: 1,
			titulo: 'Comprar la lista',
			completado: true,
			completadoALas: new Date(),
		},
	]);

	useEffect(() => {
		console.log(tareas);
	}, [tareas]);

	const eliminarTarea = (id) => {
		setTareas(tareas.filter((tarea) => tarea.id !== id));
	};

	const marcarComoCompletado = (id) => {
		setTareas(
			tareas.map((tarea) =>
				tarea.id === id
					? {
							...tarea,
							completado: true,
							completadoALas: new Date(),
					  }
					: tarea
			)
		);
	};

	const marcarComoNoCompletado = (id) => {
		setTareas(
			tareas.map((tarea) =>
				tarea.id === id
					? {
							...tarea,
							completado: false,
							completadoALas: null,
					  }
					: tarea
			)
		);
	};

	const manejarOnSubmit = (event) => {
		event.preventDefault();

		const nuevaTareaTitulo = inputRef.current.value;

		if (nuevaTareaTitulo === '') return;

		setTareas((tareasPrevias) => [
			...tareasPrevias,
			{
				id: (tareas[tareas.length - 1]?.id ?? 0) + 1,
				titulo: nuevaTareaTitulo,
				completado: false,
				completadoALas: null,
			},
		]);
	};

	return (
		<div>
			<h2>Lista de tareas</h2>
			<ul>
				{tareas.map(({ id, titulo, completado, completadoALas }) => (
					<li key={id.toString()}>
						<p>{titulo}</p>
						{completado ? (
							<div>
								<p>
									Fecha cuando se completó:{' '}
									{completadoALas.toLocaleTimeString()}
								</p>

								<div className="contenedorBotones">
									<button
										onClick={() => {
											marcarComoNoCompletado(id);
										}}
									>
										Marcar como NO completado
									</button>

									<button
										onClick={() => {
											eliminarTarea(id);
										}}
									>
										Eliminar tarea
									</button>
								</div>
							</div>
						) : (
							<div className="contenedorBotones">
								<button
									onClick={() => {
										marcarComoCompletado(id);
									}}
								>
									Marcar como completado
								</button>

								<button
									onClick={() => {
										eliminarTarea(id);
									}}
								>
									Eliminar tarea
								</button>
							</div>
						)}
					</li>
				))}
			</ul>

			<form onSubmit={manejarOnSubmit} className="contenedorBotones">
				<input
					ref={inputRef}
					type="text"
					className="input"
					placeholder="Ingresa el nombre de la tarea"
				/>

				<button type="submit">Guardar tarea</button>
			</form>
		</div>
	);
};
