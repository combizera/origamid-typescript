"use strict";
// 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
// 2 - Defina a interface da API
// 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
// 4 - Use Type Guards para garantir a Type Safety do código
// 5 - Preencha os dados da API na tela.
async function fetchCurso() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const json = await response.json();
    handleCurso(json);
}
fetchCurso();
function isCurso(curso) {
    if (curso &&
        typeof curso === 'object' &&
        'nome' in curso &&
        'horas' in curso &&
        'tags' in curso) {
        return true;
    }
    else {
        console.log('algo esta errado');
        return false;
    }
}
function handleCurso(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
        <div>
          <h2>${item.nome}</h2>
          <p>${item.horas}</p>
          <p>${item.tags.join(', ')}</p>
        </div>
      `;
        });
    }
}
