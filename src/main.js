// import NewSortView from './view/sort-view.js';
// import NewEditPointView from './view/edit-point-view.js';
// import FiltersView from './view/filters-view.js';
// import TripListView from './view/trip-list-view.js';

import BoardPresenter from './presenter/board-presenter.js';
// import {render} from './render.js';

const siteHeaderElement = document.querySelector('.page-header');
const tripHeaderElement = siteHeaderElement.querySelector('.trip-main');
const pageMainElement = document.querySelector('.page-main');
const mainContainerElement = pageMainElement.querySelector('.page-body__container');
// const mainTripEventsElement = mainContainerElement.querySelector('.trip-events');

const boardPresenter = new BoardPresenter({
  boardContainer: mainContainerElement,
  filtersContainer: tripHeaderElement,});
// const mainTripEventsListElement = mainTripEventsElement.querySelector('.trip-events__list');

// render(new NewSortView(), mainTripEventsElement);
// render(new NewEditPointView(), mainContainerElement);
// render(new FiltersView(), tripHeaderElement);
// render(new TripListView(), mainTripEventsElement);

boardPresenter.init();
