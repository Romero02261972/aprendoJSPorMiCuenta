var suma = 0
var contador = 0

do{
    var numero = parseInt(prompt('introduce un número hasta que metas uno negativo', 0));
    if(isNaN(numero)){
        numero = 0;
    }
    else if(numero >= 0){
        suma = suma + numero

    contador++;
    }}
    while(numero >= 0)
    
    alert("el total es: "+ suma);
    alert("el promedio es: "+ (suma/contador));
