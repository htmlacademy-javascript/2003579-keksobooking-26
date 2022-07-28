import {renderPopupCards} from './generator.js';
import {createMarker, clearMarkers} from './map.js';
import {clearForm} from './form-reset.js';
import {showAlert, showServerError, debounce} from './util.js';
import {unblockSubmitButton} from './forms-validation.js';
import {switchFormOnOff} from './forms-toggle.js';
import {compareType, comparePrice, compareRooms, compareGuests, compareFeatures, compareFeaturesNumber} from './filters.js';

const filtersForm = document.querySelector('.map__filters');
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');

const FILTERED_NUMBER = 10;
const RERENDER_DELAY = 500;

function renderPoints (array) {
  const copyArray = array.slice(0);
  const filteredByType = copyArray.filter((copyArrayElement)=> compareType(copyArrayElement, housingType.value));
  const filteredByPrice = filteredByType.filter((filteredByTypeElement) => comparePrice(filteredByTypeElement, housingPrice.value));
  const filteredByRooms = filteredByPrice.filter((filteredByPriceElement) => compareRooms(filteredByPriceElement, housingRooms.value));
  const filteredByGuests = filteredByRooms.filter((filteredByRoomsElement) => compareGuests(filteredByRoomsElement, housingGuests.value));
  const filteredByFeatures = filteredByGuests.filter((filteredByGuestsElement) => compareFeatures(filteredByGuestsElement));

  if(filteredByFeatures.length > 10) {
    filteredByFeatures.sort(compareFeaturesNumber);
  }

  const truncatedOffers = filteredByFeatures.slice(0, FILTERED_NUMBER);
  const cardsArray = renderPopupCards(truncatedOffers);
  truncatedOffers.forEach((offer, counter) => {
    createMarker(offer, counter, cardsArray);
  });
}

function getData () {
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {

      switchFormOnOff(filtersForm, 'map__filters--disabled', false);

      renderPoints(offers);

      filtersForm.addEventListener('change', debounce(() => {
        clearMarkers();
        renderPoints(offers);
      }, RERENDER_DELAY));

    })
    .catch(() => {

      switchFormOnOff(filtersForm, 'map__filters--disabled', true);
      showServerError();
    });
}

function sendData (body) {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    })
    .then((response) => {
      if(response.ok) {
        clearForm();
        unblockSubmitButton();
        showAlert(true);
      }
      else {
        showAlert(false);
        unblockSubmitButton();
      }
    })
    .catch(() => {
      showAlert(false);
      unblockSubmitButton();
    });
}

export {getData, sendData};
