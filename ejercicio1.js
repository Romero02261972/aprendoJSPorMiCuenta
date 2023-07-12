var numero1 = parseInt(prompt("escribe el primer número", 0));
var numero2 = parseInt(prompt("escribe el segundo número", 0));
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
 numero1 = parseInt(prompt("escribe el primer número", 0));
 numero2 = parseInt(prompt("escribe el segundo número", 0));
}
if (numero1 == numero2) {
 alert("Los números son iguales");
} else if (numero1 > numero2) {
 alert("el número mayor es:" + " " + numero1);
 alert("el número menor es:" + " " + numero2);
} else if (numero1 < numero2) {
 alert("el número mayor es: " + numero2);
 alert("el número menor es: " + numero1);
} else {
 alert("introduce numeros correctos");
}
