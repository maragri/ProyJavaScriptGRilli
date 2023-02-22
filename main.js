let nombreCliente = prompt("Ingrese su nombre: ");
saludarCliente(nombreCliente);

function saludarCliente(nombre) {
    alert("Bienvenidos a Supermercados Changuito "+ nombre)
 }
function findeCompra (numeroA,numeroB,){
    return numeroA + numeroB ;
}
    let precioProducto1 = parseInt (prompt ("Ingrese precio de 1er producto: "));
    let precioProducto2 = parseInt (prompt ("Ingrese precio de 2do producto: "));
    let resultadoCompra = findeCompra(precioProducto1 , precioProducto2);
    console.log (resultadoCompra);
    alert (nombreCliente + "el valor de su compra es: " + resultadoCompra);
    let mensaje = (nombreCliente + "Realizó una compra de" + resultadoCompra);
    console.log(mensaje)
    let final = prompt ("Gracias por realizar su compra, para finalizar ingrese: ok");
    while( final != "ok"){
        console.log(final);
        final= prompt("Gracias por realizar su compra, para finalizar ingrese: ok");
    }
    
    class Producto {
        constructor(nombre, precio, stock) {
            this.nombre = nombre; 
            this.precio = precio;
            this.stock = stock;
        }
    
        sumaIva() {
            return this.precio * 1.21
        }
    
        sumaStock(cantidad) {
            this.stock = this.stock + cantidad;
        
        }
    
        mostrarStock() {
            console.log("El stock de " + this.nombre + " es de " + this.stock );
        }
    
        vender(cantidad) {
            if( this.stock >= cantidad) {
                this.stock -= cantidad;
                console.log("Se vendieron " + cantidad + " unidades de " + this.nombre);
            } else {
                console.log("No hay stock suficiente de " + this.nombre);
            }
        }
    }
    
    
    const Yerba = new Producto("Yerba Cachamate", 10, 10);
    const Atun = new Producto ("Atun Campagnola", 12, 20);
    const Shampoo = new Producto("Shampoo", 20, 30);
    const Acondicionador = new Producto ("Acondicionador", 20, 10);
    const Harina = new Producto("Harina", 20, 90);
    const Mayonesa = new Producto ("Mayonesa", 10, 30);
    const Fideos = new Producto("Fideos", 30, 20);
    const Arroz = new Producto ("Arroz", 12, 50);

    Yerba.mostrarStock(4);
    Yerba.sumaStock(50);
    Yerba.vender(100);
    
    Atun.mostrarStock(10);
    Atun.sumaStock(10);
    Atun.vender(100);
    
    Shampoo.mostrarStock(4);
    Shampoo.sumaStock(50);
    Shampoo.vender(100);
    
    Acondicionador.mostrarStock(5);
    Acondicionador.sumaStock(50);
    Acondicionador.vender(100);
    
    Mayonesa.mostrarStock(2);
    Mayonesa.sumaStock(50);
    Mayonesa.vender(100);
    
    Harina.mostrarStock(10);
    Harina.sumaStock(10);
    Harina.vender(100);
    
    Fideos.mostrarStock(12);
    Fideos.sumaStock(50);
    Fideos.vender(100);
    
    Arroz.mostrarStock(10);
    Arroz.sumaStock(10);
    Arroz.vender(100);

    class Ofertas {
        constructor(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    }
    
    const fideos = new Ofertas("Fideos", 100);
    const harina = new Ofertas("Harina", 250);
    const pastaDental = new Ofertas("pasta dental", 300);
    const chocolate = new Ofertas("chocolate", 50);
    const galletitas = new Ofertas("galletitas", 280);
    const detergente = new Ofertas("detergente", 220);
    const leche = new Ofertas("leche", 150);
    const vino = new Ofertas("vino", 1250);
    const jabonLiquido = new Ofertas("jabon liquido", 480);
    
    
    const arrayOfertas = [fideos, harina, pastaDental, chocolate, galletitas, detergente, leche, vino, jabonLiquido]; 
    
    console.log("Ofertas del mes: ");
    console.log(arrayOfertas);

    const arrayOfertasConDescuento = arrayOfertas.map( producto => {
        return {
            nombre: producto.nombre,
            precio: (producto.precio - 20).toFixed(2)
        }
    });
    console.log(arrayOfertasConDescuento);

    const arrayPreciosBajos = arrayOfertas.filter( producto => producto.precio < 120);

console.log("Filter: ");
console.log(arrayPreciosBajos);

const arrayProductosImportados = arrayOfertas.filter( producto => producto.precio > 1000);

console.log("Filter: ");
console.log(arrayProductosImportados);
