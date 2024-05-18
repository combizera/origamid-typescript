// function abortar(mensagem: string):never {
//   throw new Error(mensagem);
// }
// abortar('um erro ocorreu');
// console.log('tente novamente')

function normalizar(valor: string[]): string[];
function normalizar(valor: string): string;
function normalizar(valor: string | string[]): string | string[] {
  if (typeof valor === "string"){
    return valor.trim().toLowerCase();
  } else {
    return valor.map((item) => item.trim().toLowerCase());
  }
}

console.log(normalizar(" DesenVolvimento"));
console.log(normalizar([" DesenVolvimento", " deSing"]));

function $(seletor: 'a'): HTMLAnchorElement;
function $(seletor: 'video'): HTMLVideoElement;
function $(seletor: string): Element | null;
function $(seletor: string): Element | null {
  return document.querySelector(seletor);
}

console.log($('a'));
console.log($('.btn'));
console.log(typeof $('a'));