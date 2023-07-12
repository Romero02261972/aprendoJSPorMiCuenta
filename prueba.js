class Inventario {
constructor(ropa, costo, precio){
    this.ropa= ropa
    this.costo = costo
    this.precio = precio
}

ganancia () {
    return (this.precio-this.costo)
}
}

const articulo  = new Inventario('falda', 50, 100)
const articulo2  = new Inventario('sueter', 100, 180)
const articulo3  = new Inventario('falda', 20, 80)
const articulo4  = new Inventario('falda', 30, 60)
const articulo5  = new Inventario('falda', 158, 266)
const articulo6  = new Inventario('falda', 25, 911)

console.log(articulo.ganancia())
console.log(articulo2.ganancia())
console.log(articulo3.ganancia())
console.log(articulo4.ganancia())
console.log(articulo5.ganancia())
console.log(articulo6.ganancia())
