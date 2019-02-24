import { View } from './View';
import { strToElement } from '../../utils/stringToElement';

export class StoksView extends View {
  constructor(props) {
    super(props);
    this.root = strToElement(`<div class="stoks"></div>`);
  }

  toggleDelBtn() {
    this.root.classList.toggle('stoks_edit-mode');
  }

  hideDelBtn() {
    this.root.classList.remove('stoks_edit-mode');
  }

  render() {
    return this.root;
  }

}