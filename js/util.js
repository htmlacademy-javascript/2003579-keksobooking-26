function getRandomPositiveInteger (a, b) { // Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
  
function getRandomPositiveFloat (a, b, digits) { // Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(digits);
}

const getRandomArrayComponent = function(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayComponent};
