# Introdução

O arquivo **index.js** contém 5 funções que fazem parte de um teste que realizei em um processo seletivo.

## Funções do teste

Tomei o cuidado de verificar se os argumentos passados nas funções são somente número ou string, para não surgir nenhum bug.

| Função       | Parâmetros           | Retorno  |
| ------------- |:-------------:| -----:|
| getHeightOfEdifice    | (floor, heightPerFloor) | O tamanho total do prédio. |
| biggerSmallerAverage     | (num1, num2, num3, num4)    |   O número maior, o menor e a média entre os 4 números |
| separatePairAndOdd | none  (Já existe um array pré-definido na funcão.)     |    Um Array com os números pares e outro Array com os números ímpares.|
| descendingListOfNumbers | (num1, num2, num3, num4, num5)     |    Um Array com os números ordenados em ordem decrescente. |
| howManyVowels | (text)   |    A quantidade de vogais presente no texto passado como argumento da função. |

## Funções de auxílio
Aceita um array e retorna um booleano se todos os elementos são números ou não.

```javascript
checkIfAllArgumentsAreNumber(numbers)
```

Recebe um número e irá retorna-lo caso ele seja par na função isPair, ou ímpar na função isOdd.
 ```javascript
isPair(number)
isOdd(number)
```

