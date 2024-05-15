"use strict";
function extractText(elemento) {
    return {
        texto: elemento.innerText,
        elemento,
    };
}
const $link = document.querySelector('a');
console.log($link);
if ($link) {
    console.log(extractText($link).elemento);
}
// recriando uma função do jquery
function $(selector) {
    return document.querySelector(selector);
}
const $button = $('button');
console.log($button);
// por querySelector ser amplo de mais e não mostrar claramente oq estamos buscando, podemos definir isso pra ele dessa forma
const $video = document.querySelector('.video');
console.log($video?.volume);
async function getData(url) {
    const response = await fetch(url);
    return await response.json();
}
async function handleData() {
    const notebook = await getData("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}
handleData();
