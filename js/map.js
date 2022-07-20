import {similarObjects} from './data.js';
import {similarElements} from './generator.js';
import {switchFormOnOff} from './forms-toggle.js';

//const dummy = undefined; //временная переменная для настройки фильтрации в будущем
const noticeForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');
const address = document.querySelector('#address');
address.value = '35.68949, 139.69171';

const map = L.map('map-canvas')
//.on('load', () => {
//    console.log('Карта загружена');
//})
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

const points = similarObjects();
//const cards = similarElements;
//console.log(points);

const markerGroup = L.layerGroup().addTo(map);


const createMarker = (point, counter) => {
  //const {lat, lng} = point;
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
    .bindPopup(similarElements[counter]);
};


let count = 0;
/*points.forEach((point) => {
    //console.log(point.offer.title);
  const marker = L.marker(
    {
    lat: point.location.lat,
    lng: point.location.lng,
    },
    {
      icon: commonPinIcon,
    }
  );

  marker
  .addTo(map)
  .bindPopup(similarElements[count]);

  count++;
});*/

points.forEach((point) => {
  createMarker(point, count);
  count++;
});

//для фильтрации

/*dummy.addEventListener('click', () => {
  markerGroup.clearLayers();
  points.slice(points.length / 2).forEach((point) => {
    createMarker(point);
  });
  dummy.remove();
});*/

//markerGroup.clearLayers();

export {map};


