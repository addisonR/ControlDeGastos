let listaNombresGastos = [];
let listaValoresGastos = [];


function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    actualizarListaDeGasto();
};

function actualizarListaDeGasto(){
    const listaDeGastos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');     
    let htmllista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach((element, posicion ) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmllista += `<li>${element} - USD ${valorGasto.toFixed(2)}
        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
        <li/>`;
        totalGastos += Number(valorGasto);
    });
    listaDeGastos.innerHTML = htmllista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
};

function limpiar(){
    document.getElementById('nombreGasto').value = "";
    document.getElementById('valorGasto').value = "";
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaDeGasto();
}