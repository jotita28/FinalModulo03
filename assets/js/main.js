class Productos {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

function Carrito() {
    const productos = [];
  this.agregar = function (sel, cant) {
    /*if(sel == 1){
        productos.push({nombre: "Leche", precio: 1000, cantidad: cant})
        alert(`${cant} Leche(s) agregado(s) al Carrito`);
    } else if(sel == 2){
        productos.push({nombre: "Pan de Molde", precio: 2000, cantidad: cant})
        alert(`${cant} Pan de Molde(s) agregado(s) al Carrito`);
    } else if(sel ==){}*/
    let cantidad = cant;
    switch (sel) {
      case 1:
        productos.push({ nombre: "Leche", precio: 1000, cantidad: cant });
        alert(`${cant} Leche(s) agregado(s) al Carrito`);
        break;
      case 2:
        productos.push({
          nombre: "Pan de Molde",
          precio: 2000,
          cantidad: cant,
        });
        alert(`${cant} Pan de Molde(s) agregado(s) al Carrito`);
        break;
      case 3:
        productos.push({ nombre: "Queso", precio: 1200, cantidad: cant });
        alert(`${cant} Queso(s) agregado(s) al Carrito`);
        break;
      case 4:
        productos.push({ nombre: "Mermelada", precio: 890, cantidad: cant });
        alert(`${cant} Mermelada(s) agregado(s) al Carrito`);
        break;
      case 5:
        productos.push({ nombre: "Azucar", precio: 1300, cantidad: cant });
        alert(`${cant} Azúcar(s) agregado(s) al Carrito`);
        break;
      default:
        alert("Ingrese un producto disponible");
        break;
    }
  };

  this.calcular = function () {
    const totalCarrito = productos.reduce((acc, producto) => {
      return acc + producto.precio * producto.cantidad;
    }, 0);
    this.finalizar(totalCarrito);
  };

  this.finalizar = function (venta) {
    alert("Total de la compra: $" + venta);
    this.detalles();
  };

  this.detalles = function () {
      /*productos.forEach(element => {
        alert(`Tus productos seleccionados\nProducto: ${element.nombre}\nCantidad: ${element.cantidad}`)
    });*/
    alert(productos.map(value => `Compraste:\nProducto: ${value.nombre}       Cantidad: ${value.cantidad}`).join('\n'));
  };
}

const producto = new Carrito();

do {
  alert(
    "Productos disponibles:\n1.- Leche $1000\n2.- Pan de Molde $2000\n3.- Queso $1200\n4.- Mermelada $890\n5.-Azúcar $1300"
  );
  const seleccion = +prompt(
    "Ingrese el número del producto que deseas agregar al carrito:"
  );
  const cantidad = +prompt("Ingrese la cantidad de unidades:");
  producto.agregar(seleccion, cantidad);
  var decision = prompt("Deseas seguir agregando productos? (s/n)");
  if (decision == "n") {
    producto.calcular();
  } 
  
} while (decision == "s" || decision == "S");

