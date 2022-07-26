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


const DEFAULT_ROOMS_OPTION = 'any';

const compareRooms = function(dataElement, targetedRooms) {
  if(targetedRooms === DEFAULT_ROOMS_OPTION) {
    return true;
  }
  else {
    if((dataElement.offer.rooms + '') === targetedRooms) {
      return true;
    }

    return false;
  }
};

const DEFAULT_GUESTS_OPTION = 'any';

const compareGuests = function(dataElement, targetedGuests) {
  if(targetedGuests === DEFAULT_GUESTS_OPTION) {
    return true;
  }
  else {
    if((dataElement.offer.guests + '') === targetedGuests) {
      return true;
    }
    return false;
  }
};

const compareFeatures = function(dataElement) {
  const checkedFeatures = document.querySelectorAll('input[name="features"]:checked');

  if(checkedFeatures.length === 0) {
    return true;
  }

  const featuresArray = dataElement.offer.features;
  if(!featuresArray) {
    return false;
  }

  let count = 0;

  for( let i = 0; i < checkedFeatures.length; i++) {

    if(featuresArray.indexOf(checkedFeatures[i].value) >= 0) {
      count++;
    }
    else {
      count = 0;
      break;
    }
  }

  return count === checkedFeatures.length;
};

const countFeaturesNumber = function(dataElement) {
  const featuresArray = dataElement.offer.features;
  if(!featuresArray) {
    return 0;
  }
  return featuresArray.length;
};

const compareFeaturesNumber = function(offerA, offerB) {
  const rankA = countFeaturesNumber(offerA);
  const rankB = countFeaturesNumber(offerB);

  return rankB - rankA;
};

export {compareType, comparePrice, compareRooms, compareGuests, compareFeatures, compareFeaturesNumber};
