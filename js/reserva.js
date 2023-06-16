let hotel;
let reservaTotal = 0;
let totalHabitaciones = 0;
let totalNoches = 0;

function encontrarHotel (data) {
    return hotel = data.find(objeto => objeto.id == idBuscado);
}


var urlParams = new URLSearchParams(window.location.search);
var idBuscado = urlParams.get('dato');
fetch('json/hoteles.json')
    .then(response => response.json())
    .then(data => {
    encontrarHotel(data);
    mostrarHabitaciones(hotel);
    })
    .catch(error => alert('Error al cargar el archivo JSON:', error));


function mostrarHabitaciones(hotel){
    let divNombre = document.getElementById('titulo');
    divNombre.innerText = hotel.nombre;
    divNombre.classList.add('p-3')
    hotel.habitaciones.forEach(habitacion => {
        let tBody = document.getElementById('tBody');

        let fila = document.createElement('tr');

        let celda1 = document.createElement('th');
        celda1.setAttribute('scope', 'row');
        celda1.textContent = habitacion.tipo;
        
        let celda2 = document.createElement('td');
        celda2.textContent = `${habitacion.capacidad} huéspedes`;

        let celda3 = document.createElement('td');
        celda3.textContent = `$${habitacion.precioPorNoche}`;

        let celda4 = document.createElement('td');
        celda4.textContent = habitacion.servicioExtra;

        let celda5 = document.createElement('td');
        let inputNumber = document.createElement("input");
        inputNumber.classList.add('form-control');
        celda5.appendChild(inputNumber);
        inputNumber.setAttribute("type", "number");
        inputNumber.setAttribute("min", "0");
        inputNumber.setAttribute("max", "10");
        inputNumber.setAttribute("max", "10");
        inputNumber.setAttribute('id', habitacion.id);

        let celda6 = document.createElement('td');
        let celda7 = document.createElement ('td');
        let enlace = document.createElement('a');

        celda6.appendChild(enlace);
        enlace.className = 'btn btn-primary';
        enlace.textContent = 'Calcular';
        enlace.addEventListener('click', function () {
            let cantidadHabitaciones = document.getElementById(habitacion.id).value;
            let rangoFechas = document.getElementById('estadia').value;
            if(rangoFechas && cantidadHabitaciones) {
                let precio = cantidadHabitaciones * rangoFechas * habitacion.precioPorNoche;
                reservaTotal += precio;
                totalHabitaciones += parseInt(cantidadHabitaciones);
                totalNoches += rangoFechas;
                celda7.textContent = `$${precio}`;
            } 
        })

        celda7.setAttribute('style', 'width: 100px');



        tBody.appendChild(fila);
        tBody.appendChild(celda1);
        tBody.appendChild(celda2);
        tBody.appendChild(celda3);
        tBody.appendChild(celda4);
        tBody.appendChild(celda5);
        tBody.appendChild(celda6);
        tBody.appendChild(celda7);

    });
}

const input = document.getElementById('fechaFin');
input.addEventListener('input', mostrarRango);

const fechaInicio = document.getElementById('fechaInicio');
//fechaInicio.addEventListener('input', validarFecha);

       
function calcularRango () {
    let fechaI = document.getElementById('fechaInicio').value;
    let fechaF = document.getElementById('fechaFin').value;
    let fechaInicio = new Date(fechaI);
    let fechaFin = new Date(fechaF);
    if (isNaN(fechaInicio) || isNaN(fechaFin)) {
        alert('Fecha inválida');
        return;
    }
    if (!fechaI || !fechaF) {
        alert('Falta una fecha');
        return;
    }
    let diferencia = fechaFin - fechaInicio;
    var rangoDias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    return rangoDias;
}

function mostrarRango (){
    let estadia = document.getElementById('estadia');
    let rango = calcularRango();
    if(isNaN(rango) || rango < 1){
        fechaInicio.innerHTML ='';
        let fechaFin = document.getElementById('fechaFin');
        fechaFin.value ='';
        alert('Ingrese fecha válida.');
    } else {
        estadia.value = rango;
        estadia.textContent = `${rango} noches.`;
    }
}
 let botonCalcular = document.getElementById('btnCalcReserva');
 botonCalcular.addEventListener('click', mostrarTotal);

function mostrarTotal () {
    let detalle = document.getElementById('detalle');
    detalle.textContent = `El valor de la reserva por ${totalNoches} noches para ${totalHabitaciones} habitaciones es de $${reservaTotal} `;
}