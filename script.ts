// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.

const links = document.querySelectorAll('.link');

links.forEach((item) => {
  if (item instanceof HTMLElement) {
    ativarElemento(item);
  }
});

function ativarElemento(elemento: HTMLElement) {
  elemento.style.color = 'red';
  elemento.style.border = '2px solid red';
}