import NewSortView from './view/sort-view.js';
import NewEditPointView from './view/edit-point-view.js';
import FiltersView from './view/filters-view.js';
import {render} from './render.js';


const siteHeaderElement = document.querySelector('.page-header');
const tripHeaderElement = siteHeaderElement.querySelector('.trip-main');
const pageMainElement = document.querySelector('.page-main');
const mainContainerElement = pageMainElement.querySelector('.page-body__container');

render(new NewSortView(), tripHeaderElement);
render(new NewEditPointView(), mainContainerElement);
render(new FiltersView(), tripHeaderElement);
