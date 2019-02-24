import { App } from './Controller/App';

import '../styles/index.css';
import '../styles/app.css';
import '../styles/header.css';
import '../styles/navigation.css';
import '../styles/filter.css';
import '../styles/stoks.css';
import '../styles/stok.css';
import '../styles/place-holder.css';

import '../assets/font-icons/css/Glyphter.css';

const app = new App();

document
  .getElementById('root')
  .appendChild(app.render());
