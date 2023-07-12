do {
 var precio = parseInt(prompt("Introduzca el precio", 0));
 var descuento = parseFloat(prompt("Descuento", 0));
 var calcularDescuento = precio * descuento;
 alert("Importe a descontar: " + calcularDescuento);
 var total = precio - calcularDescuento;
 alert("Total a pagar: " + total);

 var seguirComprando = prompt("¿Desea seguir comprando?");
} while (seguirComprando != "no");
alert("gracias por su compra");
