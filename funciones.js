function generarNumeroAleatorio(minimo = 1, maximo = 10) {
	return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}

// genera un numero aleatorio desde el 1 hasta el 100
console.log(generarNumeroAleatorio(1, 100));

// HACKATON: Hacer una función que eleve un numero base a una potencia usando Math.pow
