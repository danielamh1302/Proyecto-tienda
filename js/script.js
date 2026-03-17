let carrito=JSON.parse(localStorage.getItem('carrito'))||[];
function agregarCarrito(n,p){carrito.push({n,p});localStorage.setItem('carrito',JSON.stringify(carrito));alert('ok');}
function pagar(){localStorage.clear();alert('pagado');}
