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
console.log(pastillasRecetadas.includes('Paracetamol'));

// PROPIEDAD ´length´ - sirve para obtener o establecer la cantidad de elementos que tiene un arreglo
let listaDePerifericos = [
	'Mouse',
	'Micrófono',
	'Teclado',
	'WebCam',
	'Audífonos',
];

console.log(listaDePerifericos.length);

// MÉTODO ´join´ - sirve para unir todos los elementos de un arreglo dentro de un string
let listaDeMarcasDeTelefonos = [
	'Nokia',
	'Xiaomi',
	'Samsung',
	'Apple',
	'Huawei',
];

console.log(listaDeMarcasDeTelefonos.join(', '));

// MÉTODO ´toString´ y ´toLocaleString´
let listaDePlanetas = ['Tierra', 'Jupiter', 'Marte', 'Saturno'];

console.log('toString ->', listaDePlanetas.toString());
console.log('toLocaleString ->', listaDePlanetas.toLocaleString());

// MÉTODO ´unshift´ - sirve para agregar uno o más elementos al principio del arreglo
let listaDeNotas = [15, 16];

console.log('Las notas antes ->', listaDeNotas);
// agrega una nota al inicio
listaDeNotas.unshift(18);
console.log('Las notas después ->', listaDeNotas);

// MÉTODO ´splice´ - cambiar el contenido del arreglo o reemplazarlo por elementos existentes
let listaDeNumerosSplice = [1, 2, 3, 4, 5];
console.log('antes ->', listaDeNumerosSplice);
listaDeNumerosSplice.splice(1, 4, 'a', 'b', 'c', 'd');
console.log('después ->', listaDeNumerosSplice);

// MÉTODO ´slice´ - retorna una parte del arreglo sin modificarlo
let listaDeNumerosSlice = [5, 4, 3, 2, 1, 0];
console.log('antes ->', listaDeNumerosSlice);
console.log('después ->', listaDeNumerosSlice.slice(0, 4));

// MÉTODO ´shift´ - eliminar el primer elemento del areglo y lo devuelve
let listaDeNumerosShift = [11, 12, 13, 14, 15, 16];
console.log('antes ->', listaDeNumerosShift);
console.log('elemento eliminado ->', listaDeNumerosShift.shift());
console.log('después ->', listaDeNumerosShift);

// MÉTODO ´reverse´ - revierte un arreglo
let listaDePesoDeCajasReverse = ['1kg', '2kg', '3kg', '4kg', '5kg'];
console.log('antes ->', listaDePesoDeCajasReverse);
listaDePesoDeCajasReverse.reverse();
console.log('después ->', listaDePesoDeCajasReverse);

// MÉTODO ´push´
let listaDeCosasParaHacer = [
	'Limpiar tu cuarto',
	'Limpiar Cocina',
	'Ordenar escritorio',
];
console.log('antes ->', listaDeCosasParaHacer);
listaDeCosasParaHacer.push('Limpiar tu teclado');
console.log('después ->', listaDeCosasParaHacer);

// MÉTODO ´fill´
let listaDeNumerosFill = [1, 2, 3, 4, 5];
console.log('antes ->', listaDeNumerosFill);
listaDeNumerosFill.fill(6, 3, 4);
console.log('después ->', listaDeNumerosFill);

// MÉTODO ´filter´
let listaDeNumerosFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('antes ->', listaDeNumerosFilter);
let listaDeNumerosFilterFiltrado = listaDeNumerosFilter.filter(
	(valor) => valor > 5
);
console.log('después ->', listaDeNumerosFilterFiltrado);

// MÉTODO ´sort´ - sirve para ordenar en base a una condición
let listaDeNumerosSort = [10, 1, 3, 33, 20, 87, 98, 5, 4, 12, 41, 0];
console.log('antes ->', listaDeNumerosSort);
listaDeNumerosSort.sort(
	(numeroAnterior, numeroPosterior) => numeroPosterior - numeroAnterior
);
console.log('después ->', listaDeNumerosSort);

// MÉTODO ´every´
let listaDeNumerosEvery = [2, 4, 6, 8, 10, 12];
console.log('antes ->', listaDeNumerosEvery);
let listaDeNumerosEveryCompletado = listaDeNumerosEvery.every(
	(valor) => valor % 2 === 0
);
console.log('después ->', listaDeNumerosEveryCompletado);

// MÉTODO ´find´
let listaDeNumerosFind = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('antes ->', listaDeNumerosFind);
let listaDeNumerosFindCompletado = listaDeNumerosFind.find(
	(valor) => valor > 2
);
console.log('después ->', listaDeNumerosFindCompletado);

// MÉTODO ´findIndex´
let listaDeNumerosFindIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('antes ->', listaDeNumerosFindIndex);
let listaDeNumerosFindIndexCompletado = listaDeNumerosFindIndex.findIndex(
	(valor) => valor > 2
);
console.log('después ->', listaDeNumerosFindIndexCompletado);

// MÉTODO ´map´
let listaDeNumerosMap = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('antes ->', listaDeNumerosMap);
let listaDeNumerosMapCompletado = listaDeNumerosMap.map((valor) => valor * 2);
console.log('después ->', listaDeNumerosMapCompletado);

// MÉTODO ´pop´ - elimina y devuelve el ultimo elemento de arreglo
let listaDeNumerosPop = [1, 2, 3, 4, 5, 6];
console.log('antes ->', listaDeNumerosPop);
listaDeNumerosPop.pop();
console.log('después ->', listaDeNumerosPop);

// MÉTODO ´reduce´
let listaDeNumerosReduce = [1, 2, 3, 4, 5];

console.log('antes ->', listaDeNumerosReduce);
let listaDeNumerosReduceCompletado = listaDeNumerosReduce.reduce(
	(acumulador, valorActual) => acumulador + valorActual,
	0
);
console.log('después ->', listaDeNumerosReduceCompletado);

// MÉTODO ´reduceRight´
let listaDeNumerosReduceRight = [1, 2, 3, 4, 5];
console.log('antes ->', listaDeNumerosReduceRight);
let listaDeNumerosReduceRightCompletado = listaDeNumerosReduceRight.reduceRight(
	(valorAnterior, valorActual) => valorAnterior + valorActual,
	0
);
console.log('después ->', listaDeNumerosReduceRightCompletado);

// MÉTODO ´some´
let listaDeNumerosSome = [5, 10, 15, 20, 25];
console.log('antes ->', listaDeNumerosSome);
let listaDeNumerosSomeCompletado = listaDeNumerosSome.some(
	(valor) => valor % 2 === 0
);
console.log('después ->', listaDeNumerosSomeCompletado);

// MÉTODO ´flat´
let listaDeNumerosFlat = [1, [2, 3], [4, [5, 6]]];
console.log('antes ->', listaDeNumerosFlat);
let listaDeNumerosFlatCompletado = listaDeNumerosFlat.flat().flat();
console.log('después ->', listaDeNumerosFlatCompletado);

// MÉTODO ´flatMap´
let listaDeNumerosFlatMap = [1, 2, 3, 4, 5];

console.log('antes ->', listaDeNumerosFlatMap);
let listaDeNumerosFlatMapCompletado = listaDeNumerosFlatMap.flatMap((valor) => [
	valor,
	valor * 2,
]);
console.log('después ->', listaDeNumerosFlatMapCompletado);

// MÉTODO ´entries´
let listaDeNumerosEntries = ['a', 'b', 'c', 'd', 'e'];

for (const [indice, valor] of listaDeNumerosEntries.entries()) {
	console.log(`Indice: ${indice}, Valor: ${valor}`);
}

// MÉTODO ´keys´
let listaDeNumerosKeys = [1, 2, 3, 4, 5];

for (const indice of listaDeNumerosKeys.keys()) {
	console.log(`Indice: ${indice}`);
}

// MÉTODO ´values´
let listaDeNumerosValues = [1, 2, 3, 4, 5];

for (const indice of listaDeNumerosValues.values()) {
	console.log(`valor: ${indice}`);
}

// MÉTODO ´copyWithin´
let listaDeNumerosCopyWithin = [1, 2, 3, 4, 5];
console.log('antes ->', listaDeNumerosCopyWithin);
listaDeNumerosCopyWithin.copyWithin(0, 3, 5);
console.log('después ->', listaDeNumerosCopyWithin);

// MÉTODO ´lastIndexOf´ - devuelve el último indice de x valor
let listaDeNumerosLastIndexOf = [1, 2, 3, 4, 5, 3];

console.log(listaDeNumerosLastIndexOf.lastIndexOf(3));
