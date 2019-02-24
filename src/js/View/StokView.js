import { View } from './View';
import { strToElement } from '../../utils/stringToElement';

export class StokView extends View {
  constructor(props) {
    super(props);
    this.state = {};
    const {
      data,
      isFirst,
      isLast,
      delCallback,
      percentCallback,
      changeOrderCallback
    } = props;
    this.state.data = data;
    this.root = strToElement(`
      <div class="stoks_stok stok">
        <button class="stok__del-btn"><span class="stok__white-line"></span></button>
        <h1 class="stok__title">${data.symbol} ${data.name}</h1>
        <span class="stok__price">${data.price}</span>
        <button class="stok__percent stok__percent_${data.change[0] === '-' ? 'red' : 'green'}">${data.changePercent}</button>
        <div class="stok__moving">
          <button class="stok__arrow stok__arrow_up" ${isFirst ? 'disabled' : ''}></button>
          <button class="stok__arrow stok__arrow_down" ${isLast ? 'disabled' : ''}></button>
        </div>
      </div>
    `);
    this.root.querySelector('button').addEventListener('click', () => delCallback(data.symbol));
    this.root.querySelector('.stok__percent').addEventListener('click', () => percentCallback());
    this.root.querySelector('.stok__arrow_up').addEventListener('click', () => changeOrderCallback(data.symbol, -1));
    this.root.querySelector('.stok__arrow_down').addEventListener('click', () => changeOrderCallback(data.symbol, 1));
  }

  changePercent() {
    const data = this.state.data;
    const percentBtn = this.root.querySelector('.stok__percent');
    percentBtn.innerHTML = percentBtn.innerHTML === data.change ? data.changePercent : data.change;
  }

  render() {
    return this.root;
  }
}