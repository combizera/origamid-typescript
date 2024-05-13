# Aprendendo Typescript

## Configuração básica do TypeScript

Arquivo tsconfig.json

```
{
  "compilerOptions": {
    "target": "ESNext",
    "strict": true,
  }
}

```

Documentação oficial para ver quais elementos herdam de quem no DOM

[Documentação Mozilla](https://developer.mozilla.org/en-US/docs/Web/API)

## any

Sempre que possível (pra não dizer sempre), evitar criar variáveis que recebam 'any', pois fica muito vago e quase perde-se o sentido de usar Typescript. Perde-se a segurança e facilidade de uso.

### Quando faz sentido?

Quando estivermos recebendo os dados de uma API, pq dela pode vir string, number, array, etc, então quando vamos padronizar essa recebimento para json é aconselhavel usar any;

## null

null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

## undefined

undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.

## instanceof

Existem funções que retornam diferente tipos de objetos. Com a palavra chave _instaceof_ podemos verificar se um objeto é uam instância (foi construído ou herda) de uma função construtora (class)
