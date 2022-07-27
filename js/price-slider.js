const priceSlider = document.querySelector('.ad-form__slider');
const priceField = document.querySelector('#price');
const typeField = document.querySelector('#type');

priceField.value = 5000;

noUiSlider.create(priceSlider, {
  range: {
    min: 0,
    max: 100000,
  },
  start: 5000,
  step: 100,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(0);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

priceSlider.noUiSlider.on('update', () => {
  priceField.value = priceSlider.noUiSlider.get();
});

typeField.addEventListener('change', (evt) => {
  switch(evt.target.value) {
    case 'bungalow':
      priceSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100000,
        },
        start: 0,
        step: 100,
      });
      break;
    case 'flat':
      priceSlider.noUiSlider.updateOptions({
        range: {
          min: 1000,
          max: 100000,
        },
        start: 1000,
        step: 500,
      });
      break;
    case 'hotel':
      priceSlider.noUiSlider.updateOptions({
        range: {
          min: 3000,
          max: 100000,
        },
        start: 3000,
        step: 500,
      });
      break;
    case 'house':
      priceSlider.noUiSlider.updateOptions({
        range: {
          min: 5000,
          max: 100000,
        },
        start: 5000,
        step: 1000,
      });
      break;
    case 'palace':
      priceSlider.noUiSlider.updateOptions({
        range: {
          min: 10000,
          max: 100000,
        },
        start: 10000,
        step: 1000,
      });
      break;
  }
});

export {priceSlider};
