import {similarElements} from './generator.js';
import {createMarker} from './map.js';
import {clearForm} from './form-reset.js';
import {showAlert, showServerError} from './util.js';
import {unblockSubmitButton} from './forms-validation.js';
import {switchFormOnOff} from './forms-toggle.js';

const filtersForm = document.querySelector('.map__filters');

const getData = function () {
  const cluster = 10;
  fetch('https://26.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((offers) => {
      switchFormOnOff(filtersForm, false);
      const truncatedOffers = offers.slice(0, cluster);
      const cardsArray = similarElements(truncatedOffers);
      truncatedOffers.forEach((offer, counter) => {
        createMarker(offer, counter, cardsArray);
      });
    })
    .catch(() => {
      switchFormOnOff(filtersForm, true);
      showServerError();
    });
};

const sendData = function(body) {
  fetch(
    'https://26.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  ).then((response) => {
    if(response.ok) {
      clearForm();
      unblockSubmitButton();
      showAlert(true);
    }
    else {
      showAlert(false);
      unblockSubmitButton();
    }
  });

};

export {getData, sendData};
