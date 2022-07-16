const userForm = document.querySelector('.ad-form');

const pristine = new Pristine(userForm, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--invalid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

function validateTitle (value) {
  return value.length >= 30 && value.length <= 100;
}

pristine.addValidator(
  userForm.querySelector('#title'),
  validateTitle,
  'От 30 до 100 символов'
);

const adPrice = document.querySelector('#price');

const minPrice = {
  'Бунгало': 0,
  'Квартира': 1000,
  'Отель': 3000,
  'Дом': 5000,
  'Дворец': 10000
};

function validatePrice (value) {
  //const allocation = userForm.querySelector('[name="type"]');
  const allocation = userForm.querySelector('#type');
  const options = allocation.querySelectorAll('option');
  return minPrice[options[allocation.selectedIndex].value] <= parseInt(value, 10) && parseInt(value, 10) <= 100000;
}

function getPriceErrorMessage () {
  //const allocation = userForm.querySelector('[name="type"]');
  const allocation = userForm.querySelector('#type');
  const options = allocation.querySelectorAll('option');
  return `Цена должна быть больше ${minPrice[options[allocation.selectedIndex].value]}`;
}

pristine.addValidator(adPrice, validatePrice, getPriceErrorMessage);

function onAllocationChange () {
  adPrice.placeholder = minPrice[this.value]; //непонятно, откуда берется контекст
  pristine.validate(adPrice);
}

userForm.querySelector('#type').addEventListener('change', onAllocationChange);

//const checkIn = document.querySelector('[name="timein"]');
//const checkOut = document.querySelector('[name="time-out"]');
const checkIn = document.querySelector('#timein');
const checkInOptions = checkIn.querySelectorAll('option');
const checkOut = document.querySelector('#timeout');
const checkOutOptions = document.querySelectorAll('option');

function validateTime () {
  return checkInOptions[checkIn.selectedIndex].value.substring(6,2) === checkOutOptions[checkOut.selectedIndex].value.substring(9,2);
}

//function getTimeError () {
//  return 'Время заезда должно совпадать с временем выезда';
//}

pristine.addValidator(checkIn, validateTime, 'Время заезда должно совпадать с временем выезда');
pristine.addValidator(checkOut, validateTime, 'Время заезда должно совпадать с временем выезда');

//const adRooms = document.querySelector('[name="rooms"]');
//const adGuests = document.querySelector('[name="capacity"]');
const adRooms = document.querySelector('#room_number');
const adRoomsOptions = adRooms.querySelectorAll('option');
const adGuests = document.querySelector('#capacity');
const adGuestsOptions = document.querySelectorAll('option');

const capacityOption = {
  '1 комната': ['для 1 гостя'],
  '2 комнаты': ['для 2 гостей', 'для 1 гостя'],
  '3 комнаты': ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100 комнат': ['не для гостей']
};

function validateCapacity () {
  return capacityOption[adRoomsOptions[adRooms.selectedIndex].value].includes(adGuestsOptions[adGuests.selectedIndex].value);
}

function getDeliveryError () {
  return `${adRoomsOptions[adRooms.selectedIndex].value} ${adRoomsOptions[adRooms.selectedIndex].value === '1 комната' ? 'доступна' : 'доступны'} только ${adGuestsOptions[adGuests.selectedIndex].value}`;
}

pristine.addValidator(adRooms, validateCapacity, getDeliveryError);
pristine.addValidator(adGuests, validateCapacity, getDeliveryError);

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  pristine.validate();
});

export {pristine};
