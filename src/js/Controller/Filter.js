import { FilterView } from '../View/FilterView';

export class Filter {
  constructor(props) {
    this.model = props.model;
    this.updateStoks = props.stoksCallback;
    this.view = new FilterView({
      ...props,
      filterCallback: this.filterStoks.bind(this),
    });
    this.root = this.view.render();
  }

  filterStoks(target) {
    const filterSettings = {
      byName: target.querySelector('input[name="by-name"]').value,
      byGain: target.querySelector('select[name="by-gain"]').value,
      byRangeFrom: target.querySelector('input[name="by-range-from"]').value || this.model.stoks.getMinPrice(),
      byRangeTo: target.querySelector('input[name="by-range-to"]').value || this.model.stoks.getMaxPrice()
    };
    this.model.filter.saveFilterSettings(filterSettings);
    let stoks = this.model.stoks.getStoks();
    stoks = filterSettings.byName ? this.filterStoksByName(stoks, filterSettings.byName.toUpperCase()) : stoks;
    stoks = this.filterStoksByGain(stoks, filterSettings.byGain);
    stoks = this.filterStoksByRange(stoks, { from: filterSettings.byRangeFrom, to: filterSettings.byRangeTo });
    console.log('tmp', stoks);
    this.updateStoks(stoks);
  }

  filterStoksByName(stoks, rule) {
    return stoks.filter(stok => {
      return stok.symbol.match(rule) || stok.name.toUpperCase().match(rule);
    });
  }

  filterStoksByGain(stoks, rule) {
    let filteredStoks;
    switch (rule) {
      case 'gaining':
        filteredStoks = stoks.filter(stok => {
          return parseFloat(stok.change) >= 0;
        });
        break;
      case 'losing':
        filteredStoks = stoks.filter(stok => {
          return parseFloat(stok.change) <= 0;
        });
        break;
      default:
        filteredStoks = stoks;
        break;
    }
    return filteredStoks;
  }

  filterStoksByRange(stoks, rules) {
    return stoks.filter(stok => {
      console.log({price: {value: stok.price, type: typeof stok.price}, to: {value: rules.to, type: typeof rules.to}});
      return parseFloat(stok.price) >= rules.from && parseFloat(stok.price) <= rules.to;
    });
  }

  toggleRoot() {
    this.view.toggleRoot();
  }

  hideRoot() {
    this.view.hideRoot();
  }

  render() {
    return this.root;
  }
}