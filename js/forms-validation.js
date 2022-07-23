import {sendData} from './api.js';

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
  'bungalow': 0,
  'flat': 1000,
  'hotel': 3000,
  'house': 5000,
  'palace': 10000
};

const allocation = userForm.querySelector('#type');

function validatePrice (value) {
  return minPrice[allocation.value] <= parseInt(value, 10) && parseInt(value, 10) <= 100000;
}

function getPriceErrorMessage () {
  return `Цена должна быть больше ${minPrice[allocation.value]} и меньше 100000`;
}

pristine.addValidator(adPrice, validatePrice, getPriceErrorMessage);

function onAllocationChange () {
  adPrice.placeholder = minPrice[allocation.value];
}

userForm.querySelector('#type').addEventListener('change', onAllocationChange);

const checkIn = document.querySelector('#timein');
const checkOut = document.querySelector('#timeout');

function onTimeChange (evt) {
  if(evt.target.matches('[name="timeout"]')) {
    checkIn.value = evt.target.value;
  }
  else if(evt.target.matches('[name="timein"]')) {
    checkOut.value = evt.target.value;
  }
}

checkIn.addEventListener('change', onTimeChange);
checkOut.addEventListener('change', onTimeChange);

const adRooms = document.querySelector('#room_number');
const adGuests = document.querySelector('#capacity');

const capacityOptionValues = {
  '1': ['1'],
  '2': ['2', '1'],
  '3': ['3', '2', '1'],
  '100': ['0']
};

const roomCapacityTexcontent = {
  '1': ['для 1 гостя'],
  '2': ['для 2 гостей', 'для 1 гостя'],
  '3': ['для 3 гостей', 'для 2 гостей', 'для 1 гостя'],
  '100': ['не для гостей']
};

function validateCapacity () {
  return capacityOptionValues[adRooms.value].includes(adGuests.value);
}

function getRoomCapacityError () {
  if(parseInt(adRooms.value, 10) === 1) {
    return `${adRooms.value}&nbsp;комната доступна не более чем ${roomCapacityTexcontent[adRooms.value][0]}`;
  }
  else if(parseInt(adRooms.value, 10) > 1 && parseInt(adRooms.value, 10) < 5) {
    return `${adRooms.value}&nbsp;комнаты доступны не более чем ${roomCapacityTexcontent[adRooms.value][0]}`;
  }
  else if(parseInt(adRooms.value, 10) >= 5) {
    return `${adRooms.value}&nbsp;комнат доступны ${roomCapacityTexcontent[adRooms.value][0]}`;
  }
}

pristine.addValidator(adRooms, validateCapacity, getRoomCapacityError);
pristine.addValidator(adGuests, validateCapacity, getRoomCapacityError);

const submitButton = document.querySelector('.ad-form__submit');

const blockSubmitButton = () => {
  submitButton.disabled = true;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
};


const onUserFormSubmit = function() {
  userForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if(isValid) {
      blockSubmitButton();

      sendData(new FormData(evt.target));
    }

  });
};

export {blockSubmitButton, unblockSubmitButton, onUserFormSubmit};
