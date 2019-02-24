import { strToElement } from '../../utils/stringToElement';
import { View } from './View';

export class AppView extends View {
  constructor() {
    super();
    this.root = strToElement('<div class="app" data-hook="app"></div>');
  }

  render() {
    return this.root;
  }
}
