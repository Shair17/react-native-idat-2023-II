// (AND) si pepito hizo su tareas y limpió su cuarto entonces va de viaje
let pepitoHaLimpiadoSuCuarto = true;
let pepitoHizoSusTareas = true;

if (pepitoHaLimpiadoSuCuarto && pepitoHizoSusTareas) {
	console.log('Pepito va de viaje!');
} else {
	console.log('Pepito no va de viaje');
}

// (OR) Consigueme la llave número 18 *Ó* la llave Pico de Pato
let tengoLaLlaveNumero18 = false;
let tengoLaLlavePicoDePato = true;

if (tengoLaLlaveNumero18 || tengoLaLlavePicoDePato) {
	console.log('perfecto, cualquiera de las dos me sirve!');
} else {
	console.log('Oh no, no hay ninguna!');
}

// (NOT) Pepito si se de viaje porque hizo lo que le pidieron, pero hay un problema
let pepitoSeVaDeViaje = true;
let hayUnMalClima = true;

if (hayUnMalClima) {
	pepitoSeVaDeViaje = false;
}

if (!pepitoSeVaDeViaje) {
	console.log('oh no, no te irás de viaje!');
} else {
	console.log('felicidades, si te vas de viaje!');
}

// (==) IGUALDAD, tenemos dos sacos (uno de arroz y uno de azúcar) y cada uno pesa 50kg
let igualdadSacoDeArrozPeso = 50;
let igualdadsacoDeAzucarPeso = 50;

if (igualdadSacoDeArrozPeso == igualdadsacoDeAzucarPeso) {
	console.log('Ambos sacos pesan lo mismo');
} else {
	console.log('Los sacos no pesan lo mismo');
}

// (!=) DESIGUALDAD, tenemos dos sacos (uno de arroz y uno de azúcar) y el arroz pesa 55 y el azúcar pesa 50
let desigualdadSacoDeArrozPeso = 55;
let desigualdadSacoDeAzucarPeso = 50;

if (desigualdadSacoDeArrozPeso != desigualdadSacoDeAzucarPeso) {
	console.log('Ambos sacos pesan diferente');
} else {
	console.log('Los sacos pesan lo mismo');
}

// (===) IGUALDAD ESTRICTA
let igualdadEstrictaSacoDeArroz1 = 50;
let igualdadEstrictaSacoDeArroz2 = '50';

if (igualdadEstrictaSacoDeArroz1 === igualdadEstrictaSacoDeArroz2) {
	console.log(
		'el saco de arroz 1 y el saco de arroz 2 tienen el mismo valor y son del mismo tipo de dato'
	);
}

// (!==) DESIGUALDAD ESTRICTA
let desigualdadEstrictaSacoDeArroz1 = 50;
let desigualdadEstrictaSacoDeArroz2 = '50';

// es decir hay diferencia tanto en el valor como en el tipo da dato
if (igualdadEstrictaSacoDeArroz1 !== igualdadEstrictaSacoDeArroz2) {
	console.log(
		'el saco de arroz 1 y el saco de arroz 2 no tienen el mismo valor y no son del mismo tipo de dato'
	);
}

// (<) menor que
const PORCENTAJE_DE_BATERIA_PARA_MOSTRAR_ALERTA = 20;
let porcentajeDeBateria = 10;

if (porcentajeDeBateria < PORCENTAJE_DE_BATERIA_PARA_MOSTRAR_ALERTA) {
	console.log('carga tu teléfono!!!');
}

// (>) mayor que
const MAXIMA_CANTIDAD_DE_HORAS_PERMITIDAS_EN_TELEFONO = 5;
let cantidadDeHorasEnElTelefonoHoy = 6;

if (
	cantidadDeHorasEnElTelefonoHoy >
	MAXIMA_CANTIDAD_DE_HORAS_PERMITIDAS_EN_TELEFONO
) {
	console.log(
		'te has pasado de las horas!!! tu teléfono se bloqueará hasta mañana'
	);
}

// (<=) menor o igual que
let menorOIgualSacoDeArrozPeso = 40;
let menorOIgualsacoDeAzucarPeso = 50;

if (menorOIgualSacoDeArrozPeso <= menorOIgualsacoDeAzucarPeso) {
	console.log('El saco de arroz es menor o igual al saco de azucar');
} else {
	console.log('El saco de arroz no es menor o igual al saco de azucar');
}

// (>=) mayor o igual que
let sacoDeArrozPeso = 70;
let sacoDeAzucarPeso = 60;

if (sacoDeArrozPeso >= sacoDeAzucarPeso) {
	console.log('El saco de arroz pesa más o pesa igual que el saco de azucar');
} else {
	console.log(
		'El saco de arroz no pesa más o pesa igual que el saco de azucar'
	);
}
