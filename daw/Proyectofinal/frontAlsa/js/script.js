document.addEventListener("DOMContentLoaded", function() {
  const horariosContainer = document.getElementById("horarios");

  fetch('https://jsonblob.com/api/1238957241821683712')
  .then(response => response.json()) 
  .then(data => {

    const horarios = data.horarios;


    function generarHorarioHTML(horario, index) {
      return `
        <div class="horario" >
          <h2>${horario.salida} - ${horario.destino}</h2>
          <p>Salida: ${horario.salidaHora}</p>
          <p>Llegada: ${horario.llegadaHora}</p>
          <a href="detalle.html?index=${index}" class="link-detalle">Ver detalle</a>
        </div>
      `;
    }

   
    horarios.forEach(function(horario, index) {
      horariosContainer.innerHTML += generarHorarioHTML(horario, index);
    });
  })
  .catch(error => {
    console.error('Error al obtener los datos:', error);
  });
});
