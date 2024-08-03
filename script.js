"use strict";
const { body } = document;
console.log(body);
function handleData({ nome, preco }) {
    nome.includes('book');
    preco.toFixed();
}
handleData({
    nome: "Notebook",
    preco: 2500
});
function handleClick({ currentTarget, pageX }) {
    if (currentTarget instanceof HTMLElement) {
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX}</h1>`;
    }
    console.log(pageX);
}
document.documentElement.addEventListener('click', handleClick);
