//Возвращение случайного целого числа из диапазона положительных чисел, включая 0
function randomInteger (firstNumber, secondNumber) {
  let result = 0;
  if((firstNumber < 0) && (secondNumber < 0)) {
    return 'Указан неверный диапазон чисел. Числа должны быть положительными';
  }
  else if((firstNumber < 0) && (secondNumber > 0)) {
    firstNumber = 0;
  }
  else if((firstNumber > 0) && (secondNumber < 0)) {
    secondNumber = 0;
  }
  else if(((firstNumber < 0) && (secondNumber = 0)) || ((secondNumber < 0) && (firstNumber = 0))) {
    return result;
  }
  else if((firstNumber === secondNumber)) {
    result = firstNumber;
    return result;
  }
  let digitsNumber = 1; //перменная для хранения разрядности числа
  let temp = 0; //временная переменная для расчетов
  let multiplier = 1; //множитель для соответствия разрядности
  let spread = 0; //переменная для хранения разности двух аргументов
  let stringNumber = ''; //переменная для хранения строковой версии разности аргументов
  let extractedDigit = 0;//переменная для хранения цифр, входящих в состав числа, равного разности аргументов
  if(firstNumber < secondNumber) {
    result = firstNumber;
    spread = secondNumber - firstNumber;
  }
  else {
    result = secondNumber;
    spread = firstNumber - secondNumber;
  }
  digitsNumber = spread.toString().length;//https://stackoverflow.com/questions/10952615/how-can-i-find-the-length-of-a-number
  stringNumber = spread.toString();
  temp = 0;
  multiplier = 1;
  for(let i = 0; i < digitsNumber; i++) {
    extractedDigit = stringNumber.charAt(digitsNumber - i - 1);//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    //console.log('вот счетчик' + i)
    //console.log('вот длина строки' + digitsNumber)
    //console.log('цифра ' + extractedDigit)
    if( i >= 1) {
      multiplier *= 10;
    }
    temp = Math.random() * extractedDigit * multiplier;
    //console.log('результат до итерации ' + result);
    result += temp;
    //console.log('результат после итерации ' + result);
  }
  return Math.round(result);
}
//console.log(randomInteger(100, 665));
randomInteger(100, 665);

//Функция, возвращающая случайное число с плавающей точкой из заданного положительного диапазона чисел, включая 0
function randomFloat (firstNumber, secondNumber, numberOfDigits) {
  let result = 0;
  if((firstNumber < 0) && (secondNumber < 0)) {
    return 'Указан неверный диапазон чисел. Числа должны быть положительными';
  }
  else if((firstNumber < 0) && (secondNumber > 0)) {
    firstNumber = 0;
  }
  else if((firstNumber > 0) && (secondNumber < 0)) {
    secondNumber = 0;
  }
  else if(((firstNumber < 0) && (secondNumber = 0)) || ((secondNumber < 0) && (firstNumber = 0))) {
    return result;
  }
  else if((firstNumber === secondNumber)) {
    result = firstNumber;
    return result;
  }
  const firstFloatTail = firstNumber - Math.floor(firstNumber); //для хранения "хвостов", идущих после запятой
  const secondFloatTail = secondNumber - Math.floor(secondNumber);
  firstNumber = Math.floor(firstNumber);
  secondNumber = Math.floor(secondNumber);
  let digitsNumber = 1; //перменная для хранения разрядности числа
  let temp = 0; //временная переменная для расчетов
  let multiplier = 1; //множитель для соответствия разрядности
  let spread = 0; //переменная для хранения разности двух аргументов
  let stringNumber = ''; //переменная для хранения строковой версии разности аргументов
  let extractedDigit = 0;//переменная для хранения цифр, входящих в состав числа, равного разности аргументов
  if(firstNumber < secondNumber) {
    result = firstNumber;
    spread = secondNumber - firstNumber;
  }
  else {
    result = secondNumber;
    spread = firstNumber - secondNumber;
  }
  digitsNumber = spread.toString().length;//https://stackoverflow.com/questions/10952615/how-can-i-find-the-length-of-a-number
  stringNumber = spread.toString();
  temp = 0;
  multiplier = 1;
  for(let i = 0; i < digitsNumber; i++) {
    extractedDigit = stringNumber.charAt(digitsNumber - i - 1);//https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
    //console.log('вот счетчик' + i)
    //console.log('вот длина строки' + digitsNumber)
    //console.log('цифра ' + extractedDigit)
    if( i >= 1) {
      multiplier *= 10;
    }
    temp = Math.random() * extractedDigit * multiplier;
    //console.log('результат до итерации ' + result);
    result += temp;
    //console.log('результат после итерации ' + result);
  }
  if((firstNumber < secondNumber) && (result === Math.floor(firstNumber))) {
    result += firstFloatTail * (Math.random() + 1);
  }
  else if((firstNumber < secondNumber) && (result === Math.floor(secondNumber))) {
    result += secondFloatTail * Math.random();
  }
  else if((secondNumber < firstNumber) && (result === Math.floor(secondNumber))) {
    result += secondFloatTail * (Math.random() + 1);
  }
  else if((secondNumber < firstNumber) && (result === Math.floor(firstNumber))) {
    result += firstFloatTail*Math.random();
  }
  return result.toFixed(numberOfDigits);
}
//console.log(randomFloat(1.55, 22.47856, 7));
randomFloat(1.55, 7,478, 3);
