const alertErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const alertSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const pageBody = document.querySelector('body');


const getRandomPositiveInteger = function (a, b) { // Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = function (a, b, digits) { // Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const getRandomArrayComponent = function(array) {
  return array[getRandomPositiveInteger(0, array.length - 1)];
};

const removeAlertContainer = (evt) => {
  evt.preventDefault();
  const errorMessage = document.querySelector('.error');
  const successMessage = document.querySelector('.success');
  if(errorMessage) {
    errorMessage.remove();
  }
  else if(successMessage) {
    successMessage.remove();
  }
  document.removeEventListener('click', removeAlertContainer);
};

const onAlertEscKeydown = (evt) => {
  if(isEscapeKey(evt)) {
    removeAlertContainer(evt);
    document.removeEventListener('keydown', onAlertEscKeydown);
  }
};

const deleteEvents = function() {
  const errorMessage = document.querySelector('.error');
  const successMessage = document.querySelector('.success');
  if(!errorMessage && !successMessage) {
    document.removeEventListener('click', removeAlertContainer);
    document.removeEventListener('keydown', onAlertEscKeydown);
  }
};

const showAlert = function(check) {
  let alertContainer = undefined;
  if(check) {
    alertContainer = alertSuccessTemplate.cloneNode(true);
  }
  else {
    alertContainer = alertErrorTemplate.cloneNode(true);
  }

  pageBody.append(alertContainer);

  document.addEventListener('keydown', onAlertEscKeydown);
  document.addEventListener('click', removeAlertContainer);
  deleteEvents();
};

const showServerError = function() {
  const promo = document.querySelector('.promo');
  const title = promo.querySelector('h1');

  const container = document.createElement('div');
  container.style.display = 'block';
  container.style.backgroundColor = 'tomato';
  container.style.height = '80px';
  const errorText = document.createElement('p');
  errorText.textContent = 'Ошибка загрузки данных с сервера! Перезагрузите страницу.';
  errorText.style.fontSize = '15px';
  errorText.style.color = 'white';
  errorText.style.padding = '10px';
  container.append(errorText);

  promo.insertBefore(container, title);
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayComponent, showAlert, showServerError, debounce};
