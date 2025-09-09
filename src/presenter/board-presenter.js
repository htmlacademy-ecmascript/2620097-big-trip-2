import BoardView from '../view/bord-view.js';
import TripListView from '../view/trip-list-view.js';
import SortView from '../view/sort-view.js';
import FiltersView from '../view/filters-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointEventView from '../view/point-event-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  tripListComponent = new TripListView();
  filtersComponent = new FiltersView();

  constructor({boardContainer, filtersContainer}) {
    this.boardContainer = boardContainer;
    this.filtersContainer = filtersContainer;
  }

  init() {

    if (this.filtersContainer) {
      render(this.filtersComponent, this.filtersContainer);
    }


    render(this.boardComponent, this.boardContainer);
    render(new SortView(), this.boardComponent.getElement());
    render(this.tripListComponent, this.boardComponent.getElement());
    render(new EditPointView(), this.tripListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointEventView(), this.tripListComponent.getElement());
    }
  }
}
