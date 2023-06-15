
function calcularRango () {
  let fechaI = document.getElementById('fechaInicio').value;
  let fechaF = document.getElementById('fechaFin').value;
  let fechaInicio = new Date(fechaI);
  let fechaFin = new Date(fechaF);
  if (isNaN(fechaInicio) || isNaN(fechaFin)) {
    console.log('Fecha inválida');
    return;
  }
  if (!fechaI || !fechaF) {
    console.log('Falta una fecha');
    return;
  }
  let diferencia = fechaFin - fechaInicio;
  var rangoDias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  return rangoDias;
}

document.getElementById('btnBusqueda').addEventListener('click', calcularRango);
