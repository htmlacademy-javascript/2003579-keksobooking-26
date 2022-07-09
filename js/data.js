import {getRandomPositiveInteger, getRandomPositiveFloat, getRandomArrayComponent} from './util.js';

const TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const CHEK_IN_OUT = ['12:00', '13:00', '14:00'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getRandomAvatar = function() {
  const temp = getRandomPositiveInteger(1, 10);
  return temp <= 9 ? `0${temp}` : temp;
};

const createObject = function () {
  const randomAvatar = getRandomAvatar();
  const randomLat = getRandomPositiveFloat (35.65000, 35.70000, 5);
  const randomLng = getRandomPositiveFloat (139.70000, 139.80000, 5);
  const location = {
    lat: randomLat,
    lng: randomLng
  };

  const addressCoordinates = `${randomLat}, ${randomLng}`;

  const offer = {
    title: 'Локейшн на троечку, и кормят как в столовке.',
    address: addressCoordinates,
    price: getRandomPositiveInteger(0, 10000000000000), //непонятно, какой должна быть верхняя граница возможного диапазона
    type: TYPE[getRandomPositiveInteger(0, TYPE.length - 1)],
    rooms: getRandomPositiveInteger(1, 1000), //непонятно, какой должна быть верхняя граница возможного диапазона
    guests: getRandomPositiveInteger(1, 1000), //непонятно, какой должна быть верхняя граница возможного диапазона
    checkin: getRandomArrayComponent(CHEK_IN_OUT),
    checkout: getRandomArrayComponent(CHEK_IN_OUT),
    features: getRandomArrayComponent(FEATURES),
    description: 'Комната, в которую с трудом влезает кровать. Вид из окна на соседнюю стену.',
    photos: getRandomArrayComponent(PHOTOS)
  };

  return {
    author: `img/avatars/user${randomAvatar}.png`,
    location,
    offer
  };
};

const similarObjects = () => Array.from({length: 10}, createObject);

export {similarObjects};
