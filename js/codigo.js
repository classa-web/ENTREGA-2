const btnCargar = document.querySelector(".botonCargar");

const btnTema = document.querySelector(".botonTema");

let misTarjetas = document.getElementById("tarjetas");


const cambiarTema = () => {

    document.body.classList.toggle("dark");

}


const cargarArquitectos = () => {

    fetch("js/datos.json")
    .then(res => res.json())
    .then(datos => {

        misTarjetas.innerHTML = "";

        for(arquitecto of datos) {

            misTarjetas.innerHTML +=
            "<div><h2>" +
            arquitecto.nombre +
            "</h2><h3>" +
            arquitecto.obra +
            "</h3><p>" +
            arquitecto.descripcion +
            "</p></div>";

        }

    })

}


btnTema.addEventListener("click", cambiarTema);

btnCargar.addEventListener("click", cargarArquitectos);