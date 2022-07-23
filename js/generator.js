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

const similarElements = function(offers) {
  const newArray= offers.map(({author, offer}) => {
    const similarElement = popupOffer.cloneNode(true);

    similarElement.querySelector('.popup__avatar').src = author.avatar;
    similarElement.querySelector('.popup__title').textContent = offer.title;
    similarElement.querySelector('.popup__text.popup__text--address').textContent = offer.address;
    similarElement.querySelector('.popup__text.popup__text--price').textContent = `${offer.price} ₽/ночь`;
    similarElement.querySelector('.popup__type').textContent = OfferType[offer.type];
    similarElement.querySelector('.popup__text.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    similarElement.querySelector('.popup__text.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;

    if(!offer.features || !offer.features.length) {
      similarElement.querySelector('.popup__features').classList.add('hidden');
    }
    else {
      const featuresContainer = similarElement.querySelector('.popup__features');
      featuresContainer.innerHTML = '';

      const features = offer.features.map((feature) => {
        const featureClone = popupOfferFeature.cloneNode(true);
        featureClone.className = `popup__feature popup__feature--${feature}`;
        return featureClone;
      });

      featuresContainer.append(...features);
    }

    if(!offer.description) {
      similarElement.querySelector('.popup__description').classList.add('hidden');
    }
    else {
      similarElement.querySelector('.popup__description').textContent = offer.description;
    }

    if(!offer.photos) {
      similarElement.querySelector('.popup__photos').classList.add('hidden');
    }
    else {
      const photoContainer = similarElement.querySelector('.popup__photos');
      photoContainer.innerHTML = '';

      const photoNodes = offer.photos.map((src) => {
        const imgClone = popupOfferPhoto.cloneNode(true);
        imgClone.src = src;
        return imgClone;
      });

      photoContainer.append(...photoNodes);
    }
    return similarElement;
  });
  return newArray;
};

export {similarElements};
