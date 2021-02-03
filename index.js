const checkIfAllArgumentsAreNumber = (arguments) => {
  const isNumbers = arguments.every((number) => typeof number === "number");
  return isNumbers;
};

// Construa um algoritmo que calcula o tamanho de um edifício com base na altura de cada andar e o número de andares informados pelo usuário.
const getHeightOfEdifice = (floor, heightPerFloor) => {
  if (checkIfAllArgumentsAreNumber([floor, heightPerFloor])) {
    const minHeight = 1;
    if (floor >= minHeight && heightPerFloor >= minHeight) {
      const edificeHeight = floor * heightPerFloor;
      return `The height of edifice is: ${edificeHeight}m`;
    } else {
      return "The floor or heightPerFloor can not be 0 or less";
    }
  }
  return "Please insert only numbers in the function.";
};

// Construa um algoritmo que receba do usuário 4 números. Imprima o maior, o menor e a média deles.
const biggerSmallerAverage = (num1, num2, num3, num4) => {
  const numbers = [num1, num2, num3, num4];
  if (checkIfAllArgumentsAreNumber(numbers)) {
    const isAllNumbersEquals = ((num1 === num2) === num3) === num4;
    if (isAllNumbersEquals) {
      return `All numbers are equal.`;
    }
    const totalNumbers = 4;
    const bigger = Math.max(...numbers);
    const smaller = Math.min(...numbers);
    const average = numbers.reduce((x, y) => x + y, 0) / totalNumbers;
    return `The biggest number is: ${bigger}.
  The smallest number is ${smaller}.
  The average between the numbers is ${average}.`;
  }
  return "Please insert only numbers in the function.";
};

// Construa um algoritmo que instancia um array de inteiros com os seguintes valores: 1,3,35,40,85,123,121,209,200,305,350.
// Após, crie uma lógica que separe estes números entre pares e ímpares em outros 2 arrays.
const isPair = (number) => {
  return number % 2 === 0 ? number : null;
};
const isOdd = (number) => {
  return number % 2 !== 0 ? number : null;
};
const separatePairAndOdd = () => {
  const numbers = new Array(1, 3, 35, 40, 85, 123, 121, 209, 200, 305, 350);
  const pairs = numbers.filter((number) => isPair(number));
  const odds = numbers.filter((number) => isOdd(number));
  return `The even numbers are: ${pairs}.
  The odds numbers are: ${odds}.`;
};

// Construa um algoritmo que recebe do usuário 5 números. Após recebê-los, retorne a lista de números em ordem decrescente.
const descendingListOfNumbers = (num1, num2, num3, num4, num5) => {
  const numbers = [num1, num2, num3, num4, num5];
  if (checkIfAllArgumentsAreNumber(numbers)) {
    const descendingList = numbers.sort((x, y) => y - x);
    return `The list of your numbers is ${descendingList}`;
  }
  return "Please insert only numbers in the function.";
};

// Construa um algoritmo que identifique a quantidade de vogais a partir de um texto informado pelo usuário.
const howManyVowels = (text) => {
  if (typeof text != "string") {
    return "Please insert only strings in the function.";
  }
  const vowels = /[aeiou]/gi;
  const vowelsMatched = text.match(vowels);
  if (vowelsMatched == null || vowelsMatched.length === 0) {
    return "No vowel was found.";
  }
  const totalOfVowels = vowelsMatched.length;
  return `The total number of vowels in the text is: ${totalOfVowels}`;
};
