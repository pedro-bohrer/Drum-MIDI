// List
const ListaDeSons = document.querySelectorAll('audio');
const listaDeTeclas = document.querySelectorAll('.tecla');

// Audio Function 

function playAudio (audioSelector) {
   const el = document.querySelector(audioSelector); 

    if (el && el.localName === 'audio') {
        el.play();      
    }
    else {
        console.log("Ivalid Element or Selector!")
    }
    
}
//loop

for (let cont = 0; cont < listaDeTeclas.length; cont++) {

    const idAudio = `#${ListaDeSons[cont].id}`
    const tecla = listaDeTeclas[cont];

    listaDeTeclas[cont].onclick = function () {
        playAudio (idAudio)
    }

//Action on key press

    tecla.onkeydown = function (event) {

        if (event.code === 'Space' || event.code === 'Enter'){

        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
