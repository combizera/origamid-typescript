function extractText<Tipo extends HTMLElement> (elemento: Tipo){
  return {
  texto: elemento.innerText,
  elemento, 
  }
  
}

const $link = document.querySelector('a');

console.log($link);

if($link){
  console.log(extractText($link).elemento);
}

// recriando uma função do jquery

function $<Tipo extends Element>(selector: string): Tipo | null{
  return document.querySelector(selector)
}

const $button = $<HTMLButtonElement>('button');

console.log($button);

// por querySelector ser amplo de mais e não mostrar claramente oq estamos buscando, podemos definir isso pra ele dessa forma

const $video = document.querySelector<HTMLVideoElement>('.video');

console.log($video?.volume);

async function getData<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

interface Notebook {
  nome: string, 
  preco: number, 
}

async function handleData() {
  const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json");
  console.log(notebook);
}

handleData();