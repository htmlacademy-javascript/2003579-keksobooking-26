import {mainPinMarker} from './map.js';

const form = document.querySelector('.ad-form');
const priceField = document.querySelector('#price');
const addressField = document.querySelector('#address');

function clearForm () {
  form.reset();
  priceField.value = 5000;
  const lat = 35.68949;
  const lng = 139.69171;
  mainPinMarker.setLatLng([lat, lng]).update();
  addressField.value = `${mainPinMarker.getLatLng().lat.toFixed(5)}, ${mainPinMarker.getLatLng().lng.toFixed(5)}`;
}

export {clearForm};
