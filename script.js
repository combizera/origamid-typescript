"use strict";
// 1 - Selecione o link utilizando o método getElementById
// 2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://
const $link = document.getElementById('combizera');
function changeLink() {
    const href = $link.href;
    console.log(href);
    if (href.includes("http://")) {
        // return;
        const hrefSafe = href.replace('http://', 'https://');
        console.log('Link trocado com sucesso');
        console.log(hrefSafe);
    }
    else {
        console.error('Não foi possível trocar o link');
        console.log(href);
    }
}
changeLink();
