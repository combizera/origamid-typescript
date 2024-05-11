"use strict";
const numeros = [10, 20, 40, 5, 51, 4];
const valores = ["1", "20", "diambaa", 40, 5, 51, 4];
const livros = [
    ["O senhor dos aneis", 80],
    ["A Guerra dos Tronos", 120],
];
function maiorQue10(data) {
    return data.filter((n) => n > 10);
}
function filtrarNumeros(data) {
    return data.filter(item => typeof item === "number");
}
console.log(maiorQue10(numeros));
console.log(filtrarNumeros(valores));
