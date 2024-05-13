"use strict";
// 1 - Selecione os elementos com a classe link.
// 2 - Crie uma função que deve ser executada para cada elemento.
// 3 - Modificar através da função o estilo da color e border.
const $links = document.querySelectorAll('.link');
// console.log($links);
$links.forEach(($link) => {
    let color;
    let border;
    if ($link instanceof HTMLElement) {
        color = 'green';
        border = '2px solid green';
        if ($link instanceof HTMLAnchorElement) {
            color = 'tomato';
            border = '2px solid tomato';
        }
        $link.style.color = color;
        $link.style.border = border;
    }
});
