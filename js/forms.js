const noticeForm = document.querySelector('.ad-form');
const filtersForm = document.querySelector('.map__filters');

const switchFormOnOff = function(form, disablingClass) {

  const subElements = form.querySelectorAll('fieldset', 'select');

  form.classList.toggle(disablingClass);

  subElements.forEach((subElement) => {
    subElement.classList.toggle('disabled');
  });
};

switchFormOnOff(noticeForm, 'ad-form--disabled');
switchFormOnOff(filtersForm, 'map__filters--disabled');

switchFormOnOff(noticeForm, 'ad-form--disabled');
switchFormOnOff(filtersForm, 'map__filters--disabled');

export {switchFormOnOff};
