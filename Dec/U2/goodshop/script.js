
document.addEventListener('DOMContentLoaded',function inicializarTabla(){

    const productosTable = document.getElementById('productos-table');
  
    fetch('https://jsonblob.com/api/1204822012739837952')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la solicitud a la API: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
       
  
        data.products.forEach(producto => {
  
          const row = document.createElement('tr');
  
          const cellProducto = document.createElement('td');
          cellProducto.textContent = `${producto.title} (Ref: ${producto.SKU})`;
          row.appendChild(cellProducto);
  
          const cellCantidad = document.createElement('td');

          const botonRestar = document.createElement('button');
          botonRestar.textContent = '-';
          botonRestar.addEventListener('click', () => ajustarCantidad(producto.SKU, -1, producto.price, data));

          const spanCantidad = document.createElement('span');
          spanCantidad.id = `${producto.SKU}-cantidad`;
          spanCantidad.textContent = '0';


          const botonSumar = document.createElement('button');
          botonSumar.textContent = '+';
          botonSumar.addEventListener('click', () => ajustarCantidad(producto.SKU, 1, producto.price, data));

          cellCantidad.appendChild(botonRestar);
          cellCantidad.appendChild(spanCantidad);
          cellCantidad.appendChild(botonSumar);
  
          row.appendChild(cellCantidad);

          const cellUnidadPrecio = document.createElement('td');
          cellUnidadPrecio.textContent = `${producto.price}`;
          cellUnidadPrecio.id = `${producto.price}-price`;
          row.appendChild(cellUnidadPrecio);


  
         
  
          const cellTotal = document.createElement('td');
          cellTotal.id = `${producto.SKU}-total`;
          cellTotal.textContent = '0 €';
          row.appendChild(cellTotal);
  
          productosTable.appendChild(row);
        });
      })
    
  
      .catch(error => {
        console.error('Error al obtener datos del archivo:', error);
      });
})
  
 
/*
  window.onload = function () {

    inicializarTabla();
    
  }
  */


  function ajustarCantidad(producto, cambio, precio, data){

    const unidadesElement = document.getElementById(`${producto}-cantidad`)
    let unidades = parseInt(unidadesElement.textContent) + cambio;
    unidades = unidades < 0 ? 0 : unidades;
    unidadesElement.textContent = unidades;
    ajustarTotal(producto, unidades, precio, data);
   
  }


  function ajustarTotal(producto, unidades, precio, data){

    const totalElement = document.getElementById(`${producto}-total`)
    let total = precio * unidades;
    totalElement.textContent = total.toFixed(2) + " €";
    actualizarCarrito(data, producto, total.toFixed(2));
  }


  function actualizarCarrito(data, producto, total) {
  
    const tablaContainer = document.getElementById(`carrito-table`);
    
    
    cellDelete(tablaContainer, producto);
   

    data.products.forEach(product => {

      if(product.SKU == producto){
       
        const trPrueba = document.createElement(`tr`);
        
        trPrueba.id = `${producto}-tr`;
        
        const cellValue = document.createElement('td');
        const cellTotal = document.createElement('td');
        
        cellValue.textContent = `${product.title}`;
        cellValue.id= `${producto}`;
        trPrueba.appendChild(cellValue);
        cellTotal.id= `${producto}-td`;
        cellTotal.textContent = total + " €";
       
        trPrueba.appendChild(cellTotal);

        tablaContainer.appendChild(trPrueba);
        if (total == 0) {
          tablaContainer.removeChild(trPrueba);
        }
      }
    })
    totalUpdate(total, producto);
   
}
function cellDelete(tr, producto){


  if(document.getElementById(`${producto}-tr`)){

    const tdDelete = document.getElementById(`${producto}-tr`);

    tr.removeChild(tdDelete);
  } 
}


function totalUpdate() {
  const tablaTotal = document.getElementById(`carrito-total`);

  let precioTotal = 0;


  const tablaContainer = document.getElementById(`carrito-table`);
  const rows = tablaContainer.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    let cells = rows[i].getElementsByTagName('td');
    
 
    if (cells.length >= 2) {
  
      let total = parseFloat(cells[1].textContent);
      precioTotal += isNaN(total) ? 0 : total;
    }
  }


  tablaTotal.innerHTML = "Total: <span>" + precioTotal.toFixed(2) + " €</span>";

}


  
  