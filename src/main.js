import NewSortView from './view/sort-view.js';
import {render} from './render.js';


const siteHeaderElement = document.querySelector('.page-header');
const tripHeaderElement = siteHeaderElement.querySelector('.trip-main');

render(new NewSortView(), tripHeaderElement);
