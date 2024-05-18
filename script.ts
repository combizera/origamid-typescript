function somar(a:number, b: number, c?:number): number {
  // argumento 'c' é opcional
  return a + b + (c ? c : 0);
  // 'c' como elemento ternário, é um if de forma minificada
}

console.log(somar(3, 4));

function pintarTela(cor: string): void{
  document.body.style.background = cor;

  // return cor;
}

pintarTela("tomato");

// if (pintarTela("tomato")) {
//   console.log("pintou");
// } else {
//   console.log("não fez nada");
// }