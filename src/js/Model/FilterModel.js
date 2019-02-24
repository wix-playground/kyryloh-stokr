import { dataToJson, jsonToData } from './utils';

const INITIAL_FILTER_SETTINGS = {};
const FILTER_KEY = 'filterSettings';

export class FilterModel {
  constructor() {
    if (!this.getFilterSettings()) {
      this.saveFilterSettings(INITIAL_FILTER_SETTINGS);
    }
    this.filterSettings = this.getFilterSettings();
  }

  saveFilterSettings(settings) {
    this.filterSettings = settings;
    localStorage.setItem(FILTER_KEY, dataToJson(settings));
  }

  getFilterSettings() {
    return this.filterSettings;
  }
}