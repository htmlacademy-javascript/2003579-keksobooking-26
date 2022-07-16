const noticeForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

const switchFormOnOff = function(form, disablingClass, booleanToggle) {

  const subElements = form.querySelectorAll('fieldset', 'select');

  form.classList.toggle(disablingClass, booleanToggle);

  subElements.forEach((subElement) => {
    subElement.classList.toggle('disabled', booleanToggle);
  });
};

switchFormOnOff(noticeForm, 'ad-form--disabled', false);
switchFormOnOff(filtersForm, 'map__filters--disabled', false);

export {switchFormOnOff};
