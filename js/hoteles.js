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

