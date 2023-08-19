// MÉTODO ´concat´ - sirve par concatenar dos listas
// Esto es una lista de compras de frutas
let listaDeCompras = ['🍎', '🍐', '🍌', '🍈', '🍉', '🍍', '🥭', '🍋', '🍒'];
let listaDeComprasDeTia = ['🍎', '🍇', '🍓', '🍊', '🥥', '🥝'];
// console.log(listaDeCompras.concat(listaDeComprasDeTia));

// MÉTODO ´indexOf´ - sirve para obtener el indice en base a un elemento
let nombresDePerros = ['Docky', 'Rocky', 'Pelusa', 'Scooby'];
// console.log(nombresDePerros.indexOf('Scooby'));

// MÉTODO ´includes´ - sirve para saber si un elemento está incluido dentro del arreglo
let pastillasRecetadas = [
	'Aspirina',
	'Paracetamol',
	'Omeprazol',
	'Ramipril',
	'Lansoprazol',
];

// Queremos saber si ´Paracetamol´ está incluida en las pastillas recetadas?
// 1er parametro es el elemento a buscar
// 2do parametro es desde donde empieza a buscar
// console.log(pastillasRecetadas.includes('Paracetamol'));

// PROPIEDAD ´length´ - sirve para obtener o establecer la cantidad de elementos que tiene un arreglo
let listaDePerifericos = [
	'Mouse',
	'Micrófono',
	'Teclado',
	'WebCam',
	'Audífonos',
];

// console.log(listaDePerifericos.length);

// MÉTODO ´join´ - sirve para unir todos los elementos de un arreglo dentro de un string
let listaDeMarcasDeTelefonos = [
	'Nokia',
	'Xiaomi',
	'Samsung',
	'Apple',
	'Huawei',
];

// console.log(listaDeMarcasDeTelefonos.join(', '));

// MÉTODO ´toString´ y ´toLocaleString´
let listaDePlanetas = ['Tierra', 'Jupiter', 'Marte', 'Saturno'];

// console.log('toString ->', listaDePlanetas.toString());
// console.log('toLocaleString ->', listaDePlanetas.toLocaleString());

// MÉTODO ´unshift´ - sirve para agregar uno o más elementos al principio del arreglo
let listaDeNotas = [15, 16];

// console.log('Las notas antes ->', listaDeNotas);
// agrega una nota al inicio
// listaDeNotas.unshift(18);
// console.log('Las notas después ->', listaDeNotas);
