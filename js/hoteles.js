var hoteles = document.getElementById('hoteles');

fetch("json/hoteles.json")
.then(function(response) {
  return response.json();
})
.then(function(hotelesJson) {
  // Recorrer los hoteles y mostrarlos
  hotelesJson.forEach(function(hotel) {
    var divHotel = mostrarOrganizacion(hotel);
    hoteles.appendChild(divHotel);
    return hoteles;
  });
})
.catch(function(error) {
  console.error('Error al cargar el archivo JSON: ', error);
});

//Armar html para cada hotel
function mostrarOrganizacion (hotel) {
    // Crear un elemento div para la card
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.classList.add("my-1");

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
    var contentP = document.createElement('p');
    contentP.classList.add('card-text');
    contentP.textContent = hotel.descripcion;

    // Agregar los elementos al documento
    cardBodyDiv.appendChild(titleH5);
    cardBodyDiv.appendChild(contentP);
    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    // Obtener el contenedor donde se mostrará la card
    return cardDiv;
}

// // Cargar el JSON de hoteles
// fetch("json/hoteles.json")
// .then(response => response.json())
// .then(data => {
// const organizacionesJSON = data;
// let mostrar = false;

// // Función para generar el HTML de los resultados
// function mostrarResultados(organizaciones) {
//   const resultadosContainer = document.getElementById('resultados');
//   resultadosContainer.innerHTML = '';

//   organizaciones.forEach(organizacion => {
//    var org = mostrarOrganizacion(organizacion);
//     resultadosContainer.appendChild(org);
//   });
// }

// // Función de búsqueda
// function buscarOrganizaciones() {
//   const busqueda = document.getElementById('inputBusqueda').value.toLowerCase();

//   // Filtrar organizaciones según la búsqueda
//   const organizacionesFiltrados = organizacionesJSON.filter(organizacion => {
//     const nombre = organizacion.nombre.toLowerCase();
//     const actividad = organizacion.actividad.toLowerCase();
//     const servicios = organizacion.servicios.map(servicio => servicio.toLowerCase());
//     console.log('organizacion',organizacion);
//     return nombre.includes(busqueda) || actividad.includes(busqueda) || servicios.includes(busqueda);
//   });

//   // cuando se encuentra resultados se oculta el listado original
//   var resultados = document.getElementById("resultados");
//   resultados.style.display="block";
//   $('#orgLista').hide(); 
//   if (organizacionesFiltrados.length > 0 ) {
//     mostrar = true; 
//     mostrarResultados(organizacionesFiltrados);

//   } else {
//     resultados.innerText = "No hay resultados para esta búsqueda.";
//   }

  
// }




// // Escuchar el evento de clic en el botón de búsqueda
// document.getElementById('btnBuscar').addEventListener('click', buscarOrganizaciones);

// // Escuchar el evento de presionar la tecla Enter en la barra de búsqueda
// document.getElementById('inputBusqueda').addEventListener('keypress', event => {
//   if (event.key === 'Enter') {
//     buscarOrganizaciones();
//     let vistaOrg = document.getElementById("resultado");
//   }
// });
// })
// .catch(error => {
// console.log('Error al cargar el JSON:', error);
// });