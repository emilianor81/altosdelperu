

//DECLARO LAS VARIABLES 

listaPropiedadesJSON = []; //declaro el array de objetos que contendra las propiedades guardadas
let contenedorFiltros = document.querySelector("#contenedorFiltros");
contenedorFiltros.style.display = "none";

let panelFiltros = document.querySelector("#filtros")
let comboFiltros = document.querySelector("#combos")
let panelFiltrosActivos = document.querySelector("#filtrosActivos");
let aIndex = document.querySelectorAll(".aIndex");
let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
let contenedor = document.querySelector("#displayIndex");



//DECLARO LAS FUNCIONES

function LimpiarPanelFiltros() {
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
}

function CambiarColorLink() {
    aIndex[0].style.color = "#00000098";
    aIndex[1].style.color = "#00000098";
    aIndex[2].style.color = "#00000098";
    aIndex[3].style.color = "#00000098";
}

function estilosPanelFiltros() {
    contenedorFiltros.style.display = "";
    panelFiltros.style.border = "5px solid rgb(75, 73, 73)";
    panelFiltros.style.margin = "20px";
    contenedorPrincipal.style.height = "122px";
    contenedorPrincipal.style.background = "#c0c0c0";
    comboFiltros.style.display = "none";
}


$(() => { //Esto se ejecuta una vez termina de cargar todo el DOM, es algo adicional, no necesario.
    $.getJSON("data/propiedades.JSON", (respuesta) => { //Obtenemos los datos desde un JSON en forma estática. Es una petición asíncrona.
        // GUARDAMOS LA RESPUESTA EN UNA VARIABLE DENTRO DE LISTATAREASJSON.
        listaPropiedadesJSON = respuesta;
        console.log(listaPropiedadesJSON);

    })
})

function DesCheckDorm(seleccionado) { //ver de estos deschek para q no 
    switch (seleccionado) {
        case "cbox1":
            cbox2.checked = false;
            cbox3.checked = false;
            cbox4.checked = false;
            break;
        case "cbox2":
            cbox1.checked = false;
            cbox3.checked = false;
            cbox4.checked = false;
            break;
        case "cbox3":
            cbox1.checked = false;
            cbox2.checked = false;
            cbox4.checked = false;
            break;
        case "cbox4":
            cbox1.checked = false;
            cbox2.checked = false;
            cbox3.checked = false;
            break;
        default:
            cbox1.checked = false;
            cbox2.checked = false;
            cbox3.checked = false;
            cbox4.checked = false;

    }

}

function DesCheckTipo(seleccionado) {
    switch (seleccionado) {
        case "cboxDepto":
            cboxTerreno.checked = false;
            cboxTerrenoPozo.checked = false;
            cboxCasa.checked = false;
            break;
        case "cboxCasa":
            cboxTerreno.checked = false;
            cboxTerrenoPozo.checked = false;
            cboxDepto.checked = false;
            break;
        case "cboxTerreno":
            cboxTerrenoPozo.checked = false;
            cboxCasa.checked = false;
            cboxDepto.checked = false;
            break;
        case "cboxTerrenoPozo":
            cboxTerreno.checked = false;
            cboxCasa.checked = false;
            cboxDepto.checked = false;
            break;
        default:
            cboxTerreno.checked = false;
            cboxTerrenoPozo.checked = false;
            cboxCasa.checked = false;
            cboxDepto.checked = false;

    }
}


function mostrarSeleccionPanelFiltrosProp(seleccionado) {
    listaPropiedadesJSON.map(elemento => {
        if (elemento.tipo == seleccionado) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
    });
}


function mostrarSeleccionPanelFiltrosOpe(seleccionado) {
    listaPropiedadesJSON.map(elemento => {
        if (elemento.operacion == seleccionado) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
    });
}


function mostrarSeleccionPanelFiltrosDorm(seleccionado) {
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios == seleccionado) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
    });
}


// EVENTO CHANGE DEL COMBO DE tipo de PROPIEDAD DE LA PAGINA INDEX  //// PRUEBA HACIENDO FUNCION

let comboPropiedad = document.querySelector('#comboPropiedad');
comboPropiedad.addEventListener('change', (evt) => {
    switch (evt.target.value) {
        case "Departamento":
            renderIndex("Departamento");
            break;
        case "Casa":
            renderIndex("Casa");
            break;
        case "Terreno":
            renderIndex("Terreno");
            break;
        case "Terreno en pozo":
            renderIndex("Terreno en pozo");
            break
    }
})


const renderIndex = (seleccion) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosProp(seleccion);
    estilosPanelFiltros();
    panelFiltrosActivos.innerHTML += ` <p> Tipo Propiedad: ${seleccion}</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();
}



// EVENTO CHANGE DEL COMBO DE tipo de OPERACION DE LA PAGINA INDEX

let comboOperacion = document.querySelector('#comboOperacion');
comboOperacion.addEventListener('change', (evt) => {
    switch (evt.target.value) { //Captamos el texto de la opción elegida con evento.target.value
        case "Venta":
            renderIndexOperacion("Venta");
            break;
        case "Construccion":
            renderIndexOperacion("Construccion");
            break;
        case "Alquiler":
            renderIndexOperacion("Alquiler");
            break
    }
})



const renderIndexOperacion = (seleccion) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosOpe(seleccion);
    estilosPanelFiltros();
    panelFiltrosActivos.innerHTML += ` <p> Tipo Propiedad: ${seleccion}</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();
}



// EVENTO CHANGE DEL COMBO DE CANTIDAD DE DORMITORIOS DE LA PAGINA INDEX

let comboDorm = document.querySelector('#comboDormitorios');

comboDorm.addEventListener('change', (evt) => {
    switch (evt.target.value) {
        case "1":
            renderIndexDorm("1");
            break;
        case "2":
            renderIndexDorm("2");
            break;
        case "3":
            renderIndexDorm("3");
            break
        case "4":
            renderIndexDorm("4");
            break;
    }
})


const renderIndexDorm = (seleccion) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosDorm(seleccion);
    estilosPanelFiltros();
    panelFiltrosActivos.innerHTML += ` <p> Tipo Propiedad: ${seleccion}</p>`;
    panelFiltrosActivos.style.color = "red";
    CambiarColorLink();
}



// EVENTO CLICK DEL BOTON APLICAR PARA FILTRAR POR PRECIOS
let pDesde = '';
let pHasta = '';
let bAplicar = document.querySelector('#baplicar');
bAplicar.addEventListener('click', (evt) => {
    if (iDesde != '' && iHasta != '') {
        pDesde = iDesde.value;
        pHasta = iHasta.value;
        renderIndexPrecio(pDesde, pHasta);

    } else {
        alert("Complete ambos campos Desde y Hasta");
    }
})


const renderIndexPrecio = (Desde, Hasta) => {
    document.querySelector("#displayIndex").innerText = ``
    listaPropiedadesJSON.map(elemento => {
        if (elemento.precio >= Desde && elemento.precio <= Hasta) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        estilosPanelFiltros();

    })
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += ` <p> Precio Desde: ${Desde} </p>`;
    panelFiltrosActivos.innerHTML += ` <p> Precio Hasta: ${Hasta} </p>`;
    panelFiltrosActivos.style.color = "red";
}



// EVENTO CLICK DEL combo checkbox tipo propiedad --- cboxTerreno

let cboxTerreno = document.querySelector('#cboxTerreno');
cboxTerreno.addEventListener('click', (evt) => {
    console.log(evt.target.id);
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosProp('Terreno');
    estilosPanelFiltros();
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Terreno </p>`;
    panelFiltrosActivos.style.color = "red";
    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);
})

// EVENTO CLICK DEL combos checkbox tipo propiedad --- cboxTerrenoeN pOZO

let cboxTerrenoPozo = document.querySelector('#cboxTerrenoPozo');
cboxTerrenoPozo.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosProp('Terreno en pozo');
    estilosPanelFiltros();
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Terreno en pozo</p>`;
    panelFiltrosActivos.style.color = "red";
    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);



})

// EVENTO CLICK DEL combos checkbox tipo propiedad --- cboxCasa

let cboxCasa = document.querySelector('#cboxCasa');
cboxCasa.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosProp('Casa');
    estilosPanelFiltros();
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Casa </p>`;
    panelFiltrosActivos.style.color = "red";
    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);

})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cboxDepto

let cboxDepto = document.querySelector('#cboxDepto');
cboxDepto.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosProp('Departamento');
    estilosPanelFiltros();
    LimpiarPanelFiltros();

    panelFiltrosActivos.innerHTML += `<p> Tipo de propiedad: Departamento </p>`;
    panelFiltrosActivos.style.color = "red";
    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);


})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox1

let cbox1 = document.querySelector('#cbox1');
cbox1.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosDorm(1);
    estilosPanelFiltros();
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios: 1 </p>`;
    panelFiltrosActivos.style.color = "red";

    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);
})

// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox2

let cbox2 = document.querySelector('#cbox2');
cbox2.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosDorm(2);
    estilosPanelFiltros();
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios: 2 </p>`;
    panelFiltrosActivos.style.color = "red";
    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);


})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox3

let cbox3 = document.querySelector('#cbox3');
cbox3.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    mostrarSeleccionPanelFiltrosDorm(3);
    estilosPanelFiltros();
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios: 3 </p>`;
    panelFiltrosActivos.style.color = "red";
    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);

})


// EVENTO CLICK DEL combos checkbox tipo propiedad --- cbox4

let cbox4 = document.querySelector('#cbox4');
cbox4.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    listaPropiedadesJSON.map(elemento => {
        if (elemento.dormitorios > '3') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Tipo: ${elemento.tipo}</li>
            <li> Dormitorios: ${elemento.dormitorios}</li>
            <li> Precio: ${elemento.precio}</li>
            <li> Operacion: ${elemento.operacion}</li>
            <li> Detalle: ${elemento.detalle}</li> 
            <li> Fotos: </li> </ul></p>
            <div class="galerias">
            <img src=${elemento.img[0]} class="imgs">
            <img src=${elemento.img[1]} class="imgs">
            <img src=${elemento.img[2]} class="imgs">
            </div>
            </div>
            <br>
           `
        }
        estilosPanelFiltros();

    })
    LimpiarPanelFiltros();
    panelFiltrosActivos.innerHTML += `<p> Cantidad de Dormitorios 4 o mas</p>`;
    panelFiltrosActivos.style.color = "red";
    DesCheckTipo(evt.target.id);
    DesCheckDorm(evt.target.id);

})




