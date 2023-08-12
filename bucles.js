// TIPOS DE BÚCLES: FOR, DO WHILE & WHILE

// For
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

const MAXIMOS_PASOS = 10;
let doWhileContadorDePasosHastaCaerse = 1;

// DO WHILE
do {
	doWhileContadorDePasosHastaCaerse++;

	console.log('DO WHILE: haz dado un paso');
	console.log('DO WHILE: paso actual', doWhileContadorDePasosHastaCaerse);
} while (doWhileContadorDePasosHastaCaerse <= MAXIMOS_PASOS);

if (doWhileContadorDePasosHastaCaerse > MAXIMOS_PASOS) {
	console.log('DO WHILE te haz caído!');
} else {
	console.log('DO WHILE no te haz caido');
}

let whileContadorDePasosHastaCaerse = 0;

// WHILE
while (whileContadorDePasosHastaCaerse < MAXIMOS_PASOS) {
	whileContadorDePasosHastaCaerse++;

	console.log('WHILE: haz dado un paso');
	console.log('WHILE: paso actual', whileContadorDePasosHastaCaerse);
}

if (whileContadorDePasosHastaCaerse > MAXIMOS_PASOS) {
	console.log('WHILE te haz caído!');
} else {
	console.log('WHILE no te haz caido');
}
