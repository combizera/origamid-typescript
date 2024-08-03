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

Existem funções que retornam diferente tipos de objetos. Com a palavra chave _instaceof_ podemos verificar se um objeto é uma instância (foi construído ou herda) de uma função construtora (class)

## querySelectorAll

O querySelectorAll retorna uma NodeList de elementos. Não confundir o nome da interce NodeListOf com o nome da classe NodeList

### Anotação

Ele reforçou bastante na aula que o querySelectorAll retorna uma NodeList, que é diferente de um array, em um array por exemplo podemos passar uma função de filter, em uma NodeList não, então via de regra o ideal é transformarmos a NodeList em array, exemplo

```
// Aqui é NodeList
const $links = document.querySelectorAll('.link');

// Aqui é um array
const array = [1,2,3];

// Transformamos em array
const arrayLinks = Array.from($links);
```

## Event e instanceof

Uma função, quando criada para ser executada em diferentes tipos de eventos, deve receber como parâmetro o tipo comum entre elas Event

## this

Dentro de uma função, o this faz referência ao objeto que executou a mesma. No JS o this pode ser passado como o primeiro parâmetro da função, mesmo não sendo necessário informar ele durante a execução.

### atenção

O TS não executa o JS, assim ele não consegue assumir qual será o target ou currentTarget do evento executado. Os elementos são definidos como o tipo EventTarget, pois é o tipo mais comum entre os elementos que podem receber um evento. Ou seja, no TS evitar usar this, preferir o event.currentTarget;

Ao invés disso:

```
const $button = document.querySelector('button');

function handleClick(this: HTMLButtonElement, event:MouseEvent){
  console.log(this);
}

handleClick();

$button?.addEventListener('click', handleClick);
```

Optar por isso:

```

```

## generic

Um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface. Esse tipo poderá ser indicado no momento do uso da função através de <Tipo>.

## extends

É possível indicar que o tipo genérico deve herdar de uma interface específica com o extends

## void

No Js, uma função sem reeturn irá retornar undefined. No TS o retorno é definido como void. Isso evita usos errados como checagens booleans de métodos que não possuem retorno.

## never

O never é utilizado em casos onde a função gera um erro ou termina a aplicação

## overload

Existem funções que retornam diferentes dados dependendo do argumento.

Podemos declarar a interface dessas funções utilizando function overload. Basta declarar a interface antes da definição da mesma, utilizando o mesmo nome.

O overload deve ser compatível com a função original.

## Guard, Safety e Narrowing

O Type Guard(defesa) garante a Type Safety (segurança) do dado dentro do bloco condicional. Esse processo é chamdo de Type Narrowing (estreitamento).

O TS faz Control Flow para entender qual o dado dentro da condicional.

## Unknown

Indica que não sabemos o tipo de dados que pode ser passado. Diferente do any, o unknown só irá permitir o uso de métodos quando a Type Safety estiver garantida.

### uso

Vamos usar o unknown bem mais que o any pq ele meio que força vc a passar um typeguard para o elemento, deixando o código menos suscetível a erros.

## as

Com o Type Assertion é possível "indicar" ao TS qual o tipo de dado esperado com a palavra-chave `as`. Só é possível indicar tipos que possuam relação com o tipo original.

Evitar ao máximo o uso de Type Assertion, pos a segurança (Type Safety) é perdida quando indicamos algo que nem sempre será verdade.

### !non-null operator

Indica que não existe a possibilidade do dado ser null. Cuidado com o uso, pois pode levar a erros no runtime. Use apenas se tiver certeza.

Esse é um operador de TS `!.` e não de JS como o `?.`. Durante a compilação ele será removido.

### Outras sintaxes

```
const video1 = document.querySelector('.player') as HTMLVideoElement;
const video2 = <HTMLVideoElement>document.querySelector('.player');
const video3 = document.querySelector<HTMLVideoElement>('.player');
const video4 = document.querySelector('.player');

video1.volume;
video2.volume;
video3?.volume;
(video4 as HTMLVideoElement).volume
```
