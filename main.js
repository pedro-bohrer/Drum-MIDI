// Const das listas
const ListaDeSons = document.querySelectorAll('audio');
const listaDeTeclas = document.querySelectorAll('.tecla');

// Function do audio
function tocaSom (idElementAudio) {
    document.querySelector(idElementAudio).play(); 
}


//repeticao 

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const idAudio = `#${ListaDeSons[cont].id}`

    listaDeTeclas[cont].onclick = function () {
        tocaSom (idAudio)
    };


}
