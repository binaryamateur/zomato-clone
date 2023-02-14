import styles from  './styles/main.css';
import { Header } from './Header.js';
import { Rest } from './Rest';
import { main } from './Main.js';
import { footer } from './Footer.js';
import { subHeader } from './SubHeader.js';

const app = document.createElement('div');
console.log(styles);
app.classList.add(styles.app);
app.classList.add(styles["max-width-wrapper"]);

const header = new Header("https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png", "Log in", "Sign up");
console.log(header);
app.append(header.get());
const rest = new Rest();
app.append(rest.get());

// app.append(subHeader);
// app.append(main);
// app.append(footer);


document.body.append(app);