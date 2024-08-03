interface Produto {
  nome: string,
  preco: number,
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

async function handleProduto() {
  const produto = await fetchProduto();
  produto.nome;
}

handleProduto();

const video = document.querySelector('video')!;
video.volume;