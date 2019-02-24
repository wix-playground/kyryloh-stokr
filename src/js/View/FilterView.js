import { strToElement } from '../../utils/stringToElement';
import { View } from './View';

export class FilterView extends View {
  constructor(props) {
    super(props);
    const { filterCallback, maxPrice, minPrice} = props;
    console.log({props});
    this.root = strToElement(`
      <form class="filter" action="#">
        <div class="filter__inputs">
          <label class="filter__label">
            <span class="filter__span filter__span_small">By Name</span>
            <input type="text" name="by-name" class="filter__input">
          </label>
          <label class="filter__label">
            <span class="filter__span">By Range: From</span>
            <input type="number" min="0" name="by-range-from" class="filter__input filter__input_long">
          </label>
          <label class="filter__label filter__label_select icon-arrow">
            <span class="filter__span filter__span_small">By Gain</span>
            <select name="by-gain" class="filter__input filter__input_select">
              <option value="all">All</option>
              <option value="losing">Losing</option>
              <option value="gaining">Gaining</option>
            </select>
          </label>
          <label class="filter__label">
            <span class="filter__span">By Range: To</span>
            <input type="number" min="0" name="by-range-to" class="filter__input filter__input_long">
          </label>
        </div>
        <div class="filter__btn-container">
          <button class="filter__btn filter__btn_apply">Apply</button>
          <button class="filter__btn filter__btn_reset" disabled>Reset</button>
        </div>
      </form>
    `);
    console.log(this.root);
    this.root.addEventListener('submit', (e) => {
      filterCallback(e.target);
      e.preventDefault();
    });
  }

  toggleRoot() {
    this.root.classList.toggle('filter_hidden');
  }

  hideRoot() {
    this.root.classList.add('filter_hidden');
  }

  render() {
    return this.root;
  }
}
