
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');

const DEFAULT_TYPE_OPTION = 'any';

const compareType = function(dataElement, targetedType) {
  if(targetedType === DEFAULT_TYPE_OPTION) {
    return true;
  }
  else {
    if(dataElement.offer.type === targetedType) {
      return true;
    }
  }
  return false;
};

const priceFilterOptions = {
  optionA: 'middle',
  optionB: 'low',
  optionC: 'high',
  optionD: 'any',
};


const comparePrice = function(dataElement, targetedPrice) {
  if(targetedPrice === priceFilterOptions.optionA) {
    if(dataElement.offer.price >= 10000 && dataElement.offer.price < 50000) {
      return true;
    }
    return false;
  }
  else if(targetedPrice === priceFilterOptions.optionB) {
    if(dataElement.offer.price < 10000) {
      return true;
    }
    return false;
  }
  else if(targetedPrice === priceFilterOptions.optionC) {
    if(dataElement.offer.price >= 50000) {
      return true;
    }
    return false;
  }
  else if(targetedPrice === priceFilterOptions.optionD) {
    return true;
  }
};


const defaultRoomOption = 'any';

const compareRooms = function(dataElement, targetedRooms) {
  if(targetedRooms === defaultRoomOption) {
    return true;
  }
  else {
    if((dataElement.offer.rooms + '') === targetedRooms) {
      return true;
    }

    return false;
  }
};

const defaultGuestsOption = 'any';

const compareGuests = function(dataElement, targetedGuests) {
  if(targetedGuests === defaultGuestsOption) {
    return true;
  }
  else {
    if((dataElement.offer.guests + '') === targetedGuests) {
      return true;
    }
    return false;
  }
};

//const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

//const featuresChecked = document.querySelectorAll('input[name="features"]:checked');

const compareFeatures = function(dataElement, checkedFeatures) {
  //console.log('фильтры удобств работают');
  if(checkedFeatures.length === 0) {
    return true;
  }

  const featuresArray = dataElement.features;
  let count = 0;

  for( let i = 0; i < checkedFeatures.length; i++) {
    //console.log(checkedFeatures[i]);
    //console.log(checkedFeatures[i].value);

    if(featuresArray.indexOf(checkedFeatures[i].value) >= 0) {
      count++;
    }
    else {
      count = 0;
      break;
    }
  }
  //console.log(count);

  return count;
};

export {compareType, comparePrice, compareRooms, compareGuests, compareFeatures};
