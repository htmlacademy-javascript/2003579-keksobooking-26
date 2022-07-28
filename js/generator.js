const popupOffer = document.querySelector('#card').content.querySelector('.popup');
const popupOfferFeature = popupOffer.querySelector('.popup__feature');
const popupOfferPhoto = popupOffer.querySelector('.popup__photo');

const OfferType = {
  hotel: 'Отель',
  bungalow: 'Бунгало',
  flat: 'Квартира',
  palace: 'Дворец',
  house: 'Дом',
};

function renderPopupCards (offers) {
  const newArray= offers.map(({author, offer}) => {
    const popupCard = popupOffer.cloneNode(true);

    popupCard.querySelector('.popup__avatar').src = author.avatar;
    popupCard.querySelector('.popup__title').textContent = offer.title;
    popupCard.querySelector('.popup__text.popup__text--address').textContent = offer.address;
    popupCard.querySelector('.popup__text.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    popupCard.querySelector('.popup__type').textContent = OfferType[offer.type];
    popupCard.querySelector('.popup__text.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    popupCard.querySelector('.popup__text.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    if(!offer.features || !offer.features.length) {
      popupCard.querySelector('.popup__features').classList.add('hidden');
    }
    else {
      const featuresContainer = popupCard.querySelector('.popup__features');
      featuresContainer.innerHTML = '';

      const features = offer.features.map((feature) => {
        const featureClone = popupOfferFeature.cloneNode(true);
        featureClone.className = `popup__feature popup__feature--${feature}`;
        return featureClone;
      });

      featuresContainer.append(...features);
    }

    if(!offer.description) {
      popupCard.querySelector('.popup__description').classList.add('hidden');
    }
    else {
      popupCard.querySelector('.popup__description').textContent = offer.description;
    }

    if(!offer.photos) {
      popupCard.querySelector('.popup__photos').classList.add('hidden');
    }
    else {
      const photoContainer = popupCard.querySelector('.popup__photos');
      photoContainer.innerHTML = '';

      const photoNodes = offer.photos.map((src) => {
        const imgClone = popupOfferPhoto.cloneNode(true);
        imgClone.src = src;
        return imgClone;
      });

      photoContainer.append(...photoNodes);
    }
    return popupCard;
  });
  return newArray;
}

export {renderPopupCards};
