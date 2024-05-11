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

## any

Sempre que possível (pra não dizer sempre), evitar criar variáveis que recebam 'any', pois fica muito vago e quase perde-se o sentido de usar Typescript. Perde-se a segurança e facilidade de uso.

### Quando faz sentido?

Quando estivermos recebendo os dados de uma API, pq dela pode vir string, number, array, etc, então quando vamos padronizar essa recebimento para json é aconselhavel usar any;

## null

null é um tipo primitivo que representa a ausência de valor. É comum em funções do DOM que fazem uma busca, retornarem null quando não são bem sucedidas.

## undefined

undefined representa variáveis/propriedades que foram instanciadas, porém, os seus valores ainda não foram definidos.
