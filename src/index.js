import styles from  './styles/index.module.css';
import { Header } from './Header.js';
import { Rest } from './Rest';
import { SubHeaderWrapper } from './SubHeaderWrapper';

const body = document.body;
console.log(styles);
// app.classList.add(styles.app);
// app.classList.add(styles["max-width-wrapper"]);

const header = new Header("https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png", 
"Log in",
 "Sign up",
 [["Thakur Wara", "Sohna", "India"], ["Tilka Manjhi", "Bihar", "India"],["Eastern Reef", "Sydney", "Australia"]]
 );
console.log(header);
body.append(header.get());
const subHeaderWrapper = new SubHeaderWrapper();
body.append(subHeaderWrapper.get());
const rest = new Rest("https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png");
body.append(rest.get());
