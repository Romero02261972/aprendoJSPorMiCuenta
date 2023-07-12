/* calcula una venta con descuento del 15% */
var precio = parseInt(prompt('Introduzca el precio',0));
var descuento = .15;

do{
    if (precio >= 1000) {
    var importeDescuento = precio * descuento;
    alert('Importe a descontar: '+precio * descuento);
    var total = precio - importeDescuento
    alert('Total a pagar: ' +total)}

    else if (precio < 1000){
alert('Importe a pagar: '+ precio)
    }
    }
    while (precio == Number || total == Number){
   
        var agregar = (Boolean)
        prompt('¿Desea agregar otro artículo?');}
if (agregar = true)
    do{
        if (precio >= 1000) {
        importeDescuento = precio * descuento;
        alert('Importe a descontar: '+precio * descuento);
        total = precio - importeDescuento
        alert('Total a pagar: ' +total)}
    
        else if (precio < 1000){
    alert('Importe a pagar: '+ precio)
        }
        }
        while (precio == Number || total == Number){
       
            prompt('¿Desea agregar otro artículo?');
}
if (no){
   
    var ventaTotal = 0;
    var cantidadArticulos = 0;
}
    do{
ventaTotal = parseInt(prompt('Cantidad a pagar',0));        
if(isNaN(precio > 0)){
    ventaTotal+= precio;
    cantidadArticulos++;
}


}while(ventaTotal > 0)
parseInt(alert('Cantidad a pagar: '+ventaTotal));
parseInt(alert('Número de artículos: ', cantidadArticulos));
    
