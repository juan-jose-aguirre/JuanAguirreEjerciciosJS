//Creamos el arreglo de prueba
let listaNotas = [
  {
    id: 1,
    titulo: "Nota1",
    texto: "prueba1",
    realizada: false,
  },
  {
    id: 2,
    titulo: "Nota2",
    texto: "prueba2",
    realizada: false,
  },
  {
    id: 3,
    titulo: "nota3",
    texto: "prueba3",
    realizada: false,
  },
  {
    id: 4,
    titulo: "nota4",
    texto: "prueba4",
    realizada: false,
  }
];
//Creamos un id global para llevar la cuenta de los elementos en el arreglo de listaNotas
let idGlobal = 4;
//Mostramos primeramente las notas que tenemos en el arreglo con la funcion, dando como parametro el arreglo listaNotas
mostrarNotas(listaNotas);

//a continuacion,obtenemos los elementos que necestitamos desde el html

//botones
let btnGuardar = document.getElementById("btnGuardarNota");
let btnLimpiar = document.getElementById("btnLimpiar");
//inputs de ingreso de datos
let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");
//inputs filtros de busqueda
let filtroRealizada = document.getElementById("realizadas");
let buscar = document.getElementById("buscar");

//Creacion de los eventos que se activarán con cada uno de los elementos de html

//cuando le den al boton guardar activa la funcion agregarNota, que nos permite guardar en el arreglo la nueva nota, le enviamos como parametros el titulo, la descripcion y el arreglo de listaNotas
btnGuardar.addEventListener("click", function () {
  agregarNota(titulo, descripcion, listaNotas);
});
//cuando le den al boton limpiar, este vacia los inputs del los campos titulo y descripcion
btnLimpiar.addEventListener("click", limpiarCampos);
//cuando un usuario cambie el estado del switch esta funcion nos envia el arreglo de listaNotas y tambien el evento para validar si esta checkeado o no
filtroRealizada.addEventListener("change", function (e) {
  filtraRealizadas(listaNotas,e,buscar.value);
});
//cuando un usuario ingrese texto en el input de busqueda, este no envia el arreglo listaNotas y el evento, para capturar su valor
buscar.addEventListener("input", function (e) {
  filtraTexto(listaNotas, e.target.value.toLowerCase(),filtroRealizada.checked);
});

//Aqui comienzan las funciones

//funcion para filtrar por texto ingresado, recibe el arreglo original, texto que ingreso el usuario y el valor del input checkbox, si es true o false
function filtraTexto(arreglo,texto,realizadas) {
  let arregloFiltrado = [];
  //Validamos que el texto no este vacio y que ademas el checkbox este apagado o en false
  if (texto != "" && realizadas == false) {
    limpiarNotas();
    //vamos a filtrar el arreglo original para obtener lo que en titulo o texto contengan el texto que dio el usuario y lo guardamos en el arreglo de ayuda
    arregloFiltrado = arreglo.filter(
      (nota) =>
        nota.titulo.toLowerCase().includes(texto) ||
        nota.texto.toLowerCase().includes(texto)
    );
    mostrarNotas(arregloFiltrado);
    //validamos si el texto no esta vacio y si el checkbox esta activado o en true
  }else if(texto != "" && realizadas == true){
    //comenzamos buscando en el arreglo original los que en titulo o texto contengan el texto ingresado por el usuario y lo guardamos en el arreglo de ayuda
    arregloFiltrado = arreglo.filter(
      (nota) =>
        nota.titulo.toLowerCase().includes(texto) ||
      nota.texto.toLowerCase().includes(texto)
    );
    //creamos un arreglo2 de ayuda donde guardaremos las notas del arreglo de ayuda 1 que tengan el valor en la propiedad realizadas = true
    let arregloMejorado = [];
    //recorremos el arreglo de ayuda 1
    for (let i = 0; i < arregloFiltrado.length; i++) {
      //validamos las notas de arreglo de ayuda 1 que tengan lo propiedad realizada = true
      if (arregloFiltrado[i].realizada) {
        arregloMejorado.push(arregloFiltrado[i]);
      }
    }
    limpiarNotas();
    //mostramos las notas del arreglo de ayuda 2, donde ya sabemos que solo hay notas que incluyen el texto del usuario y tienen la propiedad realizadas = true
    mostrarNotas(arregloMejorado);
    //Validamos si es texto esta vacio y el checkbox esta encendido o igual a true
  }else if(texto == "" && realizadas == true){
    //recorremos el arreglo original
    for (let i = 0; i < arreglo.length; i++) {
      //validamos si cada nota tiene la propiedad realizada en true
      if (arreglo[i].realizada) {
        arregloFiltrado.push(arreglo[i]);
      }
    }
    limpiarNotas();
    //pintamos las notas que tengan la propiedad realizada en true
    mostrarNotas(arregloFiltrado);
    
  } else {
    limpiarNotas();
    //pintamos las notas que tengan texto = vacio y realizadas en false
    mostrarNotas(arreglo);
  }
}
//funcion donde se le pasa el arreglo original, el evento, y el texto que existe en el input de busqueda
function filtraRealizadas(arreglo, e,texto) {
  let arregloFiltrado = [];
  //validamos si el evento.target.checked es true y si el texto esta vacio
  if (e.target.checked == true && texto == "") {
    for (let i = 0; i < arreglo.length; i++) {
      //los elementos del arreglo que tengan la propiedad realizada en true los guardamos en el arreglo de ayuda 1
      if (arreglo[i].realizada) {
        arregloFiltrado.push(arreglo[i]);
      }
    }
    limpiarNotas();
    //validamos si el arreglo de ayuda 1 esta vacio
    if (arregloFiltrado == 0) {
      //buscamos el div donde van las notas
      let lugar = document.getElementById("verNotas");
      //creamos un elemento vacio
      let aviso = document.createElement("div");
      //al elemento le agregamos una alerta de bootstrap
      aviso.innerHTML = `<div class="alert alert-info" role="alert">
        No hay notas finalizadas!
      </div>`;
      lugar.appendChild(aviso);
    } else {
      //mostramos el arreglo filtrado si no esta vacio
      mostrarNotas(arregloFiltrado);
    }
    //validamos si el checkbox esta encendido o en true y el texto no esta vacio
  }else if(e.target.checked == true && texto != ""){
    limpiarNotas();
    arregloFiltrado = arreglo.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto));
    let arregloMejorado = [];
    for (let i = 0; i < arregloFiltrado.length; i++) {
      if(arregloFiltrado[i].realizada == true){
        arregloMejorado.push(arregloFiltrado[i]);
      }
    }
    mostrarNotas(arregloMejorado);

  }else if(e.target.checked == false && texto != ""){
    limpiarNotas();
    arregloFiltrado = arreglo.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto));
    mostrarNotas(arregloFiltrado);

  } else {
    limpiarNotas();
    mostrarNotas(arreglo);
  }
}

function agregarNota(titulo, descripcion, arreglo) {
  if (titulo.value == "" || descripcion.value == "") {
    alert("faltan campos por rellenar");
  } else {
    idGlobal++;

    let notaSiguiente = {
      id: idGlobal,
      titulo: titulo.value,
      texto: descripcion.value,
      realizada: false,
    };
    arreglo.push(notaSiguiente);
    limpiarNotas();
    limpiarCampos();
    mostrarNotas(arreglo);
  }
}

function mostrarNotas(arreglo) {
  if (arreglo.length == 0) {
    let lugar = document.getElementById("verNotas");
    let aviso = document.createElement("div");
    aviso.innerHTML = `<div class="alert alert-info" role="alert">
    No hay notas para mostrar!
    </div>`;
    lugar.appendChild(aviso);
  } else {
    let lugar = document.getElementById("verNotas");
    lugar.className =
      "d-flex flex-wrap justify-content-center align-items-center";
    let i = 0;
    for (let nota of arreglo) {
      let tarjeta = document.createElement("div");
      tarjeta.innerHTML = `
      <div class="card m-1 tarjeta" style="width: 13rem;">
        <div class="card-body text-center">
          <h5 class="card-title d-flex justify-content-between bg-secondary-subtle p-1 rounded">
            <input class="me-3" onClick="marcarRealizada(${nota.id},listaNotas)" ${nota.realizada ? "checked" : ""} type="checkbox" name="realizada" id="realizada${nota.id}">
            ${nota.titulo}
          </h5>
          <p class="card-text text-start ${nota.realizada ? "text-decoration-line-through" : ""}">${nota.texto}</p>
          <button onClick="borrarNota(${nota.id},listaNotas)" class="btn btn-danger">Borrar Nota</button>
        </div>
      </div>`;
      lugar.appendChild(tarjeta);
      i++;
    }
  }
}

function borrarNota(identificador, arreglo) {
  idGlobal--;
  console.log(identificador)
  console.log(arreglo)
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].id == identificador) {
      let indice = arreglo.indexOf(arreglo[i])
      console.log(indice);
      arreglo.splice(indice, 1);
    }
  }
  buscar.value = ""
  limpiarNotas();
  limpiarCampos();
  mostrarNotas(arreglo);
}
function marcarRealizada(identificador, arreglo) {
  let index;
  for( let nota of arreglo){
    if(nota.id == identificador){
      index = arreglo.indexOf(nota);
    }
  }
  let nota = arreglo[index];
  nota.realizada = !nota.realizada;
  if(buscar.value != "" && filtroRealizada.checked){
    limpiarNotas();
    filtraTexto(arreglo,buscar.value,true)
  }else if(buscar.value != "" && filtroRealizada.checked == false){
    limpiarNotas();
    filtraTexto(arreglo,buscar.value,false)
  }else if (buscar.value == "" && filtroRealizada.checked == true) {
    limpiarNotas();
    filtraRealizadas(arreglo,{target:{checked:true}},"")
  }else{
    limpiarNotas();
    mostrarNotas(arreglo);
  }
  
}

function limpiarCampos() {
  let txtTitulo = document.getElementById("titulo");
  let txtTexto = document.getElementById("descripcion");
  filtroRealizada.checked = false;
  txtTitulo.value = "";
  txtTexto.value = "";
}
function limpiarNotas() {
  let lugar = document.getElementById("verNotas");
  lugar.innerHTML = "";
}
