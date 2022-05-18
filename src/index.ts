/**
 * • Realizar un algoritmo que dado un
número entero ingresado por el
usuario, visualice en pantalla si es
par o impar
• En el caso de ingresar un cero, se
debe volver a pedir el número por
teclado (hasta que se ingrese un
número mayor que cero)
 */
let numero: number = Number(prompt("Ingrese un número: "));

while (numero === 0){
  numero = Number(prompt("Ingrese nuevamente un número mayor que cero: "));
}

if (numero % 2 === 0) {
  console.log("El número ingresado es PAR");
} else {
  console.log(" El número ingresado es IMPAR");
}
