import { MainView } from '../View/MainView';
import { Stoks } from './Stoks';
import { Filter } from './Filter';
import { StoksModel } from '../Model/StoksModel';
import { FilterModel } from '../Model/FilterModel';

export class Main {
  constructor() {
    this.view = new MainView();
    this.stoksModel = new StoksModel();
    this.stoks = new Stoks({ model: this.stoksModel });
    this.filterModel = new FilterModel();
    this.filter = new Filter({
      model: { filter: this.filterModel, stoks: this.stoksModel },
      stoksCallback: this.stoks.update.bind(this.stoks)
    });
    this.root = this.view.render();
  }

  render() {
    this.root.append(this.filter.render(), this.stoks.render());
    return this.root;
  }
}
