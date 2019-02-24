import { View } from './View';
import { strToElement } from '../../utils/stringToElement';
// import '../../styles/main.css';

export class MainView extends View {
  constructor(props) {
    super(props);
    this.root = strToElement(`
      <main class="app__main">
      </main>
    `);
  }

  render() {
    return this.root;
  }
}
