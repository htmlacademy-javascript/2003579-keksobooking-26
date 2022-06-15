//Возвращение случайного целого числа из диапазона положительных чисел, включая 0
function randomInteger (firstNumber, secondNumber) {
  let result = 0;
  if((firstNumber < 0) && (secondNumber < 0)) {
    return 'Указан неверный диапазон чисел. Числа должны быть положительными';
  }
  else if((firstNumber < 0) && (secondNumber >= 0)) {
    firstNumber = 0;
  }
  else if((firstNumber >= 0) && (secondNumber < 0)) {
    secondNumber = 0;
  }
  else if((firstNumber === secondNumber)) {
    result = firstNumber;
    return result;
  }
  if(secondNumber < firstNumber) {
    secondNumber = Math.ceil(secondNumber);
    firstNumber = Math.floor(firstNumber);
    result = Math.floor(Math.random() * (firstNumber - secondNumber + 1)) + secondNumber;//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    return result;
  }
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);
  result = Math.floor(Math.random() * (secondNumber - firstNumber + 1)) + firstNumber;
  return result;
}
//console.log(randomInteger(100, 665));
randomInteger(100, 665);

//Функция, возвращающая случайное число с плавающей точкой из заданного положительного диапазона чисел, включая 0
function randomFloat (firstNumber, secondNumber, numberOfDigits) {
  let result = 0;
  if((firstNumber < 0) && (secondNumber < 0)) {
    return 'Указан неверный диапазон чисел. Числа должны быть положительными';
  }
  else if((firstNumber < 0) && (secondNumber >= 0)) {
    firstNumber = 0;
  }
  else if((firstNumber >= 0) && (secondNumber < 0)) {
    secondNumber = 0;
  }
  else if((firstNumber === secondNumber)) {
    result = firstNumber;
    return result;
  }
  if(secondNumber < firstNumber) {
    secondNumber = Math.ceil(secondNumber);
    firstNumber = Math.floor(firstNumber);
    result = Math.random() * (firstNumber - secondNumber) + secondNumber;//https://habr.com/ru/post/312880/
    return result;
  }
  firstNumber = Math.ceil(firstNumber);
  secondNumber = Math.floor(secondNumber);
  result = Math.random() * (secondNumber - firstNumber) + firstNumber;
  return result.toFixed(numberOfDigits);
}
//console.log(randomFloat(1.55, 22.47856, 7));
randomFloat(1.55, 7.478, 3);
