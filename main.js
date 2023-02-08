let nombreCliente = prompt("Ingrese su nombre: ");
saludarCliente(nombreCliente);

function saludarCliente(nombre) {
    alert("Bienvenidos a Supermercados Changuito "+ nombre)
 }
function findeCompra (numeroA,nuemroB,){
    return numeroA + nuemroB ;
}
    let precioProducto1 = parseInt (prompt ("Ingrese precio de 1er producto: "));
    let precioProducto2 = parseInt (prompt ("Ingrese precio de 2do producto: "));
    let resultadoCompra = findeCompra(precioProducto1 , precioProducto2)
    console.log (resultadoCompra);
    alert (nombreCliente + "el valor de su compra es: " + resultadoCompra);
    let mensaje = (nombreCliente + "Realizó una compra de" + resultadoCompra);
    console.log(mensaje)
    let final = prompt ("Gracias por realizar su compra, para finalizar ingrese: ok)");
    while( final != "ok"){
        console.log(final);
        final= prompt("Gracias por realizar su compra, para finalizar ingrese: ok)");
    }
    let (final)= prompt("Gracias por realizar su compra, para finalizar ingrese: ok:");

    if((final) == "ok" || nombre == "ok") {
        alert("Gracias por elegirnos");
    }else {
        alert("Incorrecto");
    }