import { View } from './View';
import { strToElement } from '../../utils/stringToElement';

export class HeaderView extends View {
  constructor(props) {
    super(props);
    const { btnConfigs } = props;
    console.log(btnConfigs);
    this.root = strToElement(`
      <header class="header">
        <h1 class="header__logo">STOKR</h1>
        <nav class="navigation">
          <ul class="navigation__list">
            ${btnConfigs
              .map(btnConfig => `<li><button class="navigation__icon icon-${btnConfig.type}"</button></li>`)
              .join('')}
          </ul>
        </nav>
      </header>
      `
    );
    this.root
      .querySelectorAll('button')
      .forEach((btn, index) => btn.addEventListener('click', () => {
        btnConfigs[index].callback();
      }));
  }
  //
  // createBtn({ type, callback }) {
  //   const btn = document.createElement('button');
  //   btn.classList.add('navigation__icon', `icon-${type}`);
  //   btn.addEventListener('click', () => callback());
  //   return btn;
  // }

  render() {
    return this.root;
  }
}
