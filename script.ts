let produto: string = "Livro";
let preco: number = 200;

const carro: {
  marca: string;
  portas: number;
} = {
  marca: "Audi",
  portas: 5,
}

const barato = preco < 400 ? true : "carro caro dms";

function somar(a:number, b:number){
  return a + b;
}

somar(4, 10);

console.log(produto);
console.log(preco);
console.log(carro);