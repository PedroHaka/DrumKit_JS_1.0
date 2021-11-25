'use strict';

//JSON para mapear os sons e as teclas
const keys = {
    'Q': 'boom.wav',
    'W': 'kick.wav',
    'E': 'tom.wav',
    'R': 'snare.wav',
    'T': 'clap.wav',
    'Y': 'hihat.wav',
    'U': 'openhat.wav',
    'I': 'ride.wav',
    'O': 'tink.wav'
}


//Criação das divs 
const createDiv = (texto) => {
    const div = document.createElement('div');
    div.classList.add('key');
    div.textContent = texto;
    div.id = texto;
    document.getElementById('container').appendChild(div);
}
//Exibir as divs (chamar função que cria divs para cada elemento do array)
const exibir = (keys) => Object.keys(keys).forEach(createDiv);
exibir(keys);

//Definição de funções disparadas no evento de clique/teclado
//Tocar os sons
const playSound = (letter) => {
    const audio = new Audio(`./sounds/${keys[letter]}`);
    audio.play();
}
//adicionar e remover efeitos visuais
const addEffect = (letter) => {
    document.getElementById(letter).classList.add('active');
}
const removeEffect = (letter) => {
    const div = document.getElementById(letter);
    const removeActive = () =>  div.classList.remove('active');
    div.addEventListener('transitionend', removeActive)
}


//Eventos de clique, validação de keys e disparo de funções ao evento
const pressKey = (event) => {
    /* let letter = '';
    if(event.type == 'click'){
        letter = event.target.id;
    }else{
        letter = event.key.toUpperCase();
    } */
    //a linha abaixo equivale ao código comentado acima, porém utilizando operador ternário
    const letter = event.type == 'click' ? event.target.id : event.key.toUpperCase();
    const allowedKeys = keys.hasOwnProperty(letter);
    if(allowedKeys){
        addEffect(letter);
        playSound(letter);
        removeEffect(letter);
    }
}
document.getElementById('container').addEventListener('click', pressKey); 
window.addEventListener('keydown', pressKey);