import {similarElements} from './generator.js';
import {switchFormOnOff} from './forms-toggle.js';
import {onUserFormSubmit} from './forms-validation.js';
import {map, createMarker} from './map.js';
import {priceSlider} from './price-slider.js';
import {getData} from './api.js';
import {clearForm} from './form-reset.js';

getData();

onUserFormSubmit();
