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
  },
];
let idGlobal = 4;

mostrarNotas(listaNotas);

let btnGuardar = document.getElementById("btnGuardarNota");
let btnLimpiar = document.getElementById("btnLimpiar");

let titulo = document.getElementById("titulo");
let descripcion = document.getElementById("descripcion");

let filtroRealizada = document.getElementById("realizadas");
let buscar = document.getElementById("buscar");

btnGuardar.addEventListener("click", function () {
  agregarNota(titulo, descripcion, listaNotas);
});
btnLimpiar.addEventListener("click", limpiarCampos);

filtroRealizada.addEventListener("change", function (e) {
  filtraRealizadas(listaNotas, e);
});

buscar.addEventListener("input",function(e){
    filtraTexto(listaNotas,e.target.value);
});

function filtraTexto(arreglo,texto){
    if (texto != "") {
        limpiarNotas();
        let arregloFiltrado = arreglo.filter(nota => nota.titulo.toLowerCase().includes(texto) || nota.texto.toLowerCase().includes(texto) );
        mostrarNotas(arregloFiltrado);
    }else{
        limpiarNotas();
        mostrarNotas(arreglo);
    }
}

function filtraRealizadas(arreglo, e) {
  if (e.srcElement.checked == true) {
    let arregloFiltrado = [];
    for (let i = 0; i < arreglo.length; i++) {
      if (arreglo[i].realizada) {
        arregloFiltrado.push(arreglo[i]);
      }
    }
    limpiarNotas();
    if (arregloFiltrado == 0) {
      let lugar = document.getElementById("verNotas");
      let aviso = document.createElement("div");
      aviso.innerHTML = `<div class="alert alert-info" role="alert">
        No hay notas finalizadas!
      </div>`;
      lugar.appendChild(aviso);
    } else {
      mostrarNotas(arregloFiltrado);
    }
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
      "d-flex flex-wrap justify-content-center align-items-center m-auto bg-danger";
    let i = 0;
    for (let nota of arreglo) {
      let tarjeta = document.createElement("div");
      tarjeta.innerHTML = `<div class="card m-1" style="width: 13rem;">
      <div class="card-body">
        <h5 class="card-title border-bottom"><input class="me-3" onClick="marcarRealizada(${
          i
        },listaNotas)" type="checkbox" ${
        nota.realizada ? "checked" : ""
      } type="checkbox" name="realizada" id="realizada${nota.id}">${
        nota.titulo
      }</h5>
            <p class="card-text">${nota.texto}</p>
            <button onClick="borrarNota(${i},listaNotas)" class="btn btn-primary">Borrar Nota</button>
            </div>
            </div>`;
      lugar.appendChild(tarjeta);
      i++;
    }
  }
}

function borrarNota(index, arreglo) {
  idGlobal--;
  arreglo.splice(index, 1);
  limpiarNotas();
  mostrarNotas(arreglo);
}
function marcarRealizada(index, arreglo) {
  let nota = arreglo[index];
  nota.realizada = !nota.realizada;
}

function limpiarCampos() {
  let txtTitulo = document.getElementById("titulo");
  let txtTexto = document.getElementById("descripcion");
  txtTitulo.value = "";
  txtTexto.value = "";
}
function limpiarNotas() {
  let lugar = document.getElementById("verNotas");
  lugar.innerHTML = "";
}
