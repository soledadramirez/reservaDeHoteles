
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
  console.log(rangoDias);
  return rangoDias;
}

function mostrarResultados(hoteles) {
  resultadoDiv.innerHTML = '';
  hoteles.forEach(hotel => {
    var itemHotel = mostrarHotel(hotel);
    resultadoDiv.appendChild(itemHotel);
  });
}

function mostrarHotel (hotel) {
  // Crear un elemento div para la card
  var cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  cardDiv.classList.add("my-1");
  cardDiv.classList.add("shadow");
  cardDiv.classList.add('w-50');

  // Crear un elemento img para la imagen de la card
  var img = document.createElement('img');
  img.classList.add('card-img-top');
  img.style.height="350px";
  img.src = hotel.imagen;
  img.alt = 'Hotel';

  // Crear un elemento div para el cuerpo de la card
  var cardBodyDiv = document.createElement('div');
  cardBodyDiv.classList.add('card-body');

  // Crear un elemento h5 para el título de la card
  var titleH5 = document.createElement('h5');
  titleH5.classList.add('card-title');
  titleH5.textContent = hotel.nombre;

   // Crear un elemento p para el contenido de la card
   var contentDir = document.createElement('p');
   contentDir.classList.add('card-text');
   contentDir.textContent = `${hotel.direccion}, ${hotel.ciudad}, ${hotel.provincia}`;

   var contentCat = document.createElement('p');
   contentCat.classList.add('card-text');
   contentCat.textContent = hotel.categoria;

  // Crear un elemento p para el contenido de la card
  var contentP = document.createElement('p');
  contentP.classList.add('card-text');
  contentP.textContent = hotel.descripcion;

   // Crear un elemento p para el contenido de la card
   var contentServ = document.createElement('p');
   contentServ.classList.add('card-text');
   contentServ.textContent = hotel.servicios;

    // Crear un elemento p para el contenido de la card
    var contentInt = document.createElement('p');
    contentInt.classList.add('card-text');
    contentInt.textContent = hotel.puntosInteres;

    // Crear un elemento img para la imagen de la card
    var img = document.createElement('img');
    img.classList.add('card-img-top');
    img.style.height="350px";
    img.src = hotel.imagen;
    img.alt = 'Hotel';

  // Agregar los elementos al documento
  cardBodyDiv.appendChild(titleH5);
  cardBodyDiv.appendChild(contentDir);
  cardBodyDiv.appendChild(contentCat);
  cardBodyDiv.appendChild(contentP);
  cardDiv.appendChild(img);
  cardDiv.appendChild(cardBodyDiv);

  // Obtener el contenedor donde se mostrará la card
  return cardDiv;
}

// Función de búsqueda
function buscarHoteles() {
// Cargar el JSON de hoteles
  fetch("json/hoteles.json")
    .then(response => response.json())
    .then(data => {
      const hotelesJson = data;
      let busqueda = document.getElementById('inputBusqueda').value.toLowerCase();
      // Filtrar organizaciones según la búsqueda
      const hotelesFiltrados = hotelesJson.filter(hotel => {
        const nombre = hotel.nombre.toLowerCase();
        const ciudad = hotel.ciudad.toLowerCase();
        const region = hotel.regionGeografica.toLowerCase();
        const provincia = hotel.provincia.toLowerCase();
        return nombre.includes(busqueda) || ciudad.includes(busqueda) || region.includes(busqueda) || provincia.includes(busqueda);
      });
      let detalleDiv = document.getElementById('detalleDiv');
      let resultadoDiv = document.getElementById('resultadoDiv');

      if (hotelesFiltrados.length > 0 ) {
        detalleDiv.style.display='none';
        resultadoDiv.style.display='block';
        mostrarResultados(hotelesFiltrados);
      } else {
        resultadoDiv.innerText = "No hay resultados para esta búsqueda.";
      }
    })
    .catch(error => {
      console.log('Error al cargar el JSON de hoteles', error);
    });
  
}



document.getElementById('btnBusqueda').addEventListener('click', buscarHoteles);
//agregar evento enter