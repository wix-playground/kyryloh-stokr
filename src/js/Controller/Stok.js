import { StokView } from '../View/StokView';

export class Stok {
  constructor(props) {
    this.view = new StokView(props);
    this.root = this.view.render();
  }

  render() {
    return this.root;
  }
}
