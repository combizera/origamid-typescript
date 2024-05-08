"use strict";
// Exercício 1
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto(' deSiNG de MarcasSSS'));
// Exercício 2
const $input = document.querySelector('input');
const total = localStorage.getItem('total');
if ($input && total) {
    $input.value = total;
    calcularGanho(Number($input.value));
}
function calcularGanho(value) {
    const $p = document.querySelector('p');
    if ($p) {
        $p.innerText = `Ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if ($input) {
        localStorage.setItem("total", $input.value);
        calcularGanho(Number($input.value));
    }
}
if ($input) {
    $input.addEventListener('keyup', totalMudou);
}
