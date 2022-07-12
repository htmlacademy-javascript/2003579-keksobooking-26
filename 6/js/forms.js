const noticeForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

const switchFormOnOff = function(form, disablingClass, booleanToggle) {

  const subElements = form.querySelectorAll('fieldset', 'select');

  if(!booleanToggle) {
    form.classList.add(disablingClass);

    subElements.forEach((subElement) => {
      subElement.classList.add('disabled');
    });
  }
  else {
    form.classList.remove(disablingClass);

    subElements.forEach((subElement) => {
      subElement.classList.remove('disabled');
    });
  }
};

switchFormOnOff(noticeForm, 'ad-form--disabled', false);
switchFormOnOff(filtersForm, 'map__filters--disabled', false);

switchFormOnOff(noticeForm, 'ad-form--disabled', true);
switchFormOnOff(filtersForm, 'map__filters--disabled', true);

export {switchFormOnOff};
