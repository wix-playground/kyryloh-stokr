import { View } from './View';

export class NavigatonButtonView extends View {
  constructor(props) {
    super();
    const { callback, type } = props;
    this.callback = callback;
    this.type = type;

    this.root = document.createElement('button');
    this.root.classList.add('navigation__icon', `icon-${this.type}`);
    this.root.addEventListener('click', () => this.callback());
  }

  render() {
    return this.root;
  }
}