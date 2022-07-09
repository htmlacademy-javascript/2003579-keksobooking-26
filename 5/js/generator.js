import {similarObjects} from './ data.js';

const popupOffer = document.querySelector('#card').content.querySelector('.popup');
const map = document.querySelector('#map-canvas');
const similarOffers = similarObjects();

const similarOfferFragment = document.createDocumentFragment();

const similarCards = function() {
    similarOffers.forEach(({author, location, offer}) => {
    const similarElement = popupOffer.cloneNode(true);
    similarElement.querySelector('.popup__avatar').src = author;
    similarElement.querySelector('.popup__title') = offer.title;
    similarElement.querySelector('.popup__text popup__text--address') = offer.address;
    similarElement.querySelector('.popup__text popup__text--price') = `${offer.price} ₽/ночь`;

    if(offer.type === 'flat') {
        similarElement.querySelector('.popup__type') = 'Квартира';
    }
    else if(offer.type === 'bungalow') {
        similarElement.querySelector('.popup__type') = 'Бунгало';
    }
    else if(offer.type === 'house') {
        similarElement.querySelector('.popup__type') = 'Дом';

    }
    else if(offer.type === 'palace') {
        similarElement.querySelector('.popup__type') = 'Дворец';
    }
    else if(offer.type === 'hotel') {
        similarElement.querySelector('.popup__type') = 'Отель';
    }

    similarElement.querySelector('.popup__text popup__text--capacity') = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    similarElement.querySelector('.popup__text popup__text--time') = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;  

    const popupFeatures = similarElement.querySelectorAll('.popup__feature');

    if(offer.features.length === 0) {
        document.querySelector('.popup__photos').classList.add('.hidden');
    }
    else {
       for( let i = 0; i < popupFeatures.length; i++) {
          for(let j = 0; j < offer.features.length; j ++) {
              if(popupFeatures[i].classList.contains(`popup__feature--${offer.features[j]}`)) {
                 popupFeatures[i].textContent = offer.features[j];
                 }; 
          }        
       } 
    }
    
    if(offer.description == '') {
        similarElement.querySelector('.popup__description').classList.add('.hidden');
    }
    else {
        similarElement.querySelector('.popup__description') = offer.description;
    }    

    const photos = document.querySelectorAll('.popup__photo');

    if(photos.length == 0) {
        similarElement.querySelector('.popup__photos').classList.add('hidden');
    }
    else if(offer.photos.length == 1) {
       similarElement.querySelector('.popup__photo').src = offer.photos;
    }
    else if(offer.photos.length > 1) {
        similarElement.querySelector('.popup__photo').src = offer.photos[0];
        for(let i = 0; i < offer.photos.length; i++) {
            const temp = similarElement.querySelector('.popup__photo').cloneNode(true);
            temp.src = offer.photos[i];
        }
    }    

    similarOfferFragment.appendChild(similarElement);
    });

    return map.appendChild(similarOfferFragment[0]);
}

export {similarCards};
