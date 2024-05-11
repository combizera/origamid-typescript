// Receber os dados da API se o curso for iniciante pinte o titulo de azul, se for avançado pinte de vermelho

interface Curso {
  aulas: number,
  gratuito: boolean,
  horas: number,
  nivel: 'iniciante' | 'avancado',
  nome: string,
  tags: (string)[],
}

async function fetchCursos() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const data = await response.json();
  mostrarCursos(data);
  
  // mostrar API no console
  console.log(data);
}

fetchCursos();

function mostrarCursos(cursos: Curso[]){
  const $ul = document.querySelector('#cursos ul');
  if($ul){
    cursos.forEach(curso => {
      const $li = document.createElement('li');
      let color;
      if(curso.nivel === 'iniciante'){
        color = 'blue';
      } else if (curso.nivel === 'avancado'){
        color = 'red';
      }
      $li.innerHTML += `
        <h3 style="color:${color};">${curso.nome}</h3>
        <div class="cursos__tags">
          Tags:
          <span>${curso.tags}</span>
        </div>
        <div class="cursos__infos">
          <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
          <p>Horas: ${curso.horas}h</p>
          <p>Aulas: ${curso.aulas}</p>
        </div>
      `;
      $ul.appendChild($li); 
    });
  }
  else {
    console.error("Não há cursos");
  }

}