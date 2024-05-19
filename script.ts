function typeGuard(value: any) {
  if (typeof value === 'string') {
    return value.toLowerCase();
  }
  if (typeof value === 'number') {
    return value.toFixed();
  }
  if (value instanceof HTMLElement) {
    return value.innerText;
  }
}

typeGuard('Origamid');
typeGuard(200);
typeGuard(document.body);

const obj = {
  nome: 'ygor',
}

if ("preco" in obj){
  console.log("sim");
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const json = await response.json();
  handleProduto(json);
}

interface Produto {
  nome: string,
  total: number,
}

function handleProduto(data: Produto){
  console.log(data);
  if ('total' in data){
    document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.total}</p>
    ` 
  } 
}

fetchProduto();

