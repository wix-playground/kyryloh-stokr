import { AppView } from '../View/AppView';
import { Header } from './Header';
import { Main } from './Main';
import { getBtnConfigs } from '../Model/NavigationButtonModel';

export class App {
  constructor() {
    this.state = {
      activePage: 'stoks',
    };
    this.view = new AppView();
    this.header = new Header({
      btnConfigs: getBtnConfigs({
        searchCallback: this.showSearch.bind(this),
        refreshCallback: this.showRefresh.bind(this),
        filterCallback: this.showFilter.bind(this),
        settingsCallback: this.showSettings.bind(this)
      })
    });
    this.main = new Main();
    this.root = this.view.render();
  }

  showSearch() {
    console.log('showSearch');
  }

  showRefresh() {
    console.log('showRefresh');
  }

  showFilter() {
    this.main.stoks.hideDelBtn();
    this.main.filter.toggleRoot();
  }

  showSettings() {
    this.main.filter.hideRoot();
    this.main.stoks.toggleDelBtn()
  }

  render() {
    // this.root = this.view.render().firstChild;
    this.root.append(this.header.render(), this.main.render());
    return this.root;
  }
}
