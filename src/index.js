import './styles/main.css';
import { header } from './Header.js';
import { main } from './Main.js';
import { footer } from './Footer.js';
import { subHeader } from './SubHeader.js';

const app = document.createElement('div');
app.className = "app";
app.append(header);
app.append(subHeader);
app.append(main);
app.append(footer);


document.body.append(app);