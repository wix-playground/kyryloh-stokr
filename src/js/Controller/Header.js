import { HeaderView } from '../View/HeaderView';
import { NavigatonButtonView } from '../View/NavigatonButtonView';

export class Header {
  constructor(props) {
    const { btnConfigs } = props;
    this.view = new HeaderView(props);
    // this.view
    //   .render()
    //   .querySelectorAll('li')
    //   .forEach((li, index) => {
    //     const btn = new NavigatonButtonView(btnConfigs[index]);
    //     li.appendChild(btn.render());
    //   });
  }

  onSearchClick() {


  }

  onRefreshClick() {

  }

  onFilterClick() {
    // const state = this.view.

  }

  onSettingsClick() {

  }

  render() {
    return this.view.render();
  }
}
