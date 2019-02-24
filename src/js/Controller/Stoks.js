import { StoksView } from '../View/StoksView';
import { StokView } from '../View/StokView';

export class Stoks {
  constructor(props) {
    this.model = props.model;
    this.view = new StoksView();
    this.root = this.view.render();
    this.stoks = [];
    this.getStoks()
      .then((data) => {
        const stoks = data.map(item => item);
        this.update(stoks);
      });
  }

  async getStoks() {
    return await this.model.fetchStoks();
  }

  update(stoks) {
    console.log('stoks', stoks);
    this.root.innerHTML = '';
    this.stoks = stoks.map((item, index, arr) => new StokView({
      data: item,
      isFirst: index === 0,
      isLast: arr.length - 1 === index,
      delCallback: this.delStok.bind(this),
      percentCallback: this.changePercent.bind(this),
      changeOrderCallback: this.changeOrder.bind(this)
    }));
    this.stoks.forEach(stok => this.root.appendChild(stok.render()));
  }

  toggleDelBtn() {
    this.view.toggleDelBtn();
  }

  hideDelBtn() {
    this.view.hideDelBtn();
  }

  delStok(symbol) {
    this.model.delStok(symbol);
    this.update(this.model.getStoks());
  }

  changePercent() {
    this.stoks.forEach(stok => stok.changePercent());
  }

  changeOrder(symbol, step) {
    this.model.changeOrder(symbol, step);
    this.update(this.model.getStoks());
  }

  render() {
    return this.root;
  }
}