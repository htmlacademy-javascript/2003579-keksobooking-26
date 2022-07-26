import {switchFormOnOff} from './forms-toggle.js';

const noticeForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');
const address = document.querySelector('#address');
address.value = '35.68949, 139.69171';

const map = L.map('map-canvas')
  .setView({
    lat: 35.68949,
    lng: 139.69171,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

map.on('load',
  switchFormOnOff(noticeForm, 'ad-form--disabled', false),
  switchFormOnOff(filtersForm, 'map__filters--disabled', false),
);

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 35.68949,
    lng: 139.69171,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  address.value = `${evt.target.getLatLng().lat.toFixed(5)}, ${evt.target.getLatLng().lng.toFixed(5)}`;
});

const commonPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point, counter, cardsArray) => {
  const marker = L.marker(
    {
      lat: point.location.lat,
      lng: point.location.lng,
    },
    {
      icon: commonPinIcon,
    },
  );

  marker
    .addTo(markerGroup)
    .bindPopup(cardsArray[counter]);
};

const clearMarkers = function() {
  markerGroup.clearLayers();
};

export {map, createMarker, clearMarkers};
