import { dataToJson, jsonToData } from './utils';
import { parseFloatTwoPoints } from '../../utils/parsers';

const API_URL = 'https://www.wix.com/_api/stokr-server';
const QUOTES = `${API_URL}/quotes?q=`;

const SYMBOL = '01. symbol';
const PRICE = '05. price';
const CHANGE = '09. change';
const CHANGE_PERCENT = '10. change percent';
const NAME = '11. name';

const SYMBOLS_KEY = 'symbols';
const INITIAL_SYMBOLS = ['WIX', 'GOOG', 'DIS', 'AAPL'];

export class StoksModel {
  constructor() {
    if (!this.getSymbols()) {
      this.saveSymbols(INITIAL_SYMBOLS);
    }
    this.stoks = [];
  }

  saveSymbols(symbols) {
    localStorage.setItem(SYMBOLS_KEY, dataToJson(symbols));
  }

  delSymbol(symbol) {
    const symbols = this.getSymbols();
    symbols.splice(symbols.indexOf(symbol), 1);
    this.saveSymbols(symbols);
  }

  getSymbols() {
    return jsonToData(localStorage.getItem(SYMBOLS_KEY));
  }

  saveStoks(stoks) {
    this.stoks = stoks;
  }

  delStok(symbol) {
    this.delSymbol(symbol);

    const stoks = this.getStoks().filter(stok => symbol !== stok.symbol);
    this.saveStoks(stoks);
  }

  getStoks() {
    return this.stoks;
  }

  changeOrder(symbol, step) {
    const symbols = this.getSymbols();
    let index = symbols.indexOf(symbol);
    [symbols[index], symbols[index + step]] = [symbols[index + step], symbols[index]];
    this.saveSymbols(symbols);

    const stoks = this.getStoks();
    [stoks[index], stoks[index + step]] = [stoks[index + step], stoks[index]];
    this.saveStoks(stoks);
  }

  getMinPrice() {
    return Math.min(...this.stoks.map(stok => parseFloat(stok.price)));
  }

  getMaxPrice() {
    return Math.max(...this.stoks.map(stok => parseFloat(stok.price)));
  }

  // TODO: try-catch
  async fetchStoks() {
    const query = `${QUOTES}${this.getSymbols().join(',')}`;
    const response = await fetch(query);
    const json = await response.json();
    const stoks = this.normalizeData(json, item => {
      return {
        symbol: item[SYMBOL],
        price: parseFloatTwoPoints(item[PRICE]),
        change: parseFloatTwoPoints(item[CHANGE]),
        changePercent: `${parseFloatTwoPoints(item[CHANGE_PERCENT])}%`,
        name: item[NAME]
      };
    });
    this.saveStoks(stoks);
    return stoks;
  }

  normalizeData(arr, callback) {
    return arr.map(item => callback(item));
  }
}