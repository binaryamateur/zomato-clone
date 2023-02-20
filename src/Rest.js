import { Footer } from './Footer';
import { Main } from './Main';
import { MainHeader } from './MainHeader';
import styles from "./styles/rest.module.css";
import { SubFooter } from './SubFooter';

class Rest {
    constructor(logoUrl){
        this.content = document.createElement("section");
        this.content.className = styles.rest;
        const mainHeader = new MainHeader();
        const main = new Main();
        const subFooter = new SubFooter();
        const footer = new Footer(logoUrl);
        this.content.append(mainHeader.get());
        this.content.append(main.get());
        this.content.append(subFooter.get());
        this.content.append(footer.get());
    }

    get(){
        console.log(this.content);
        return this.content;
    }
}

export {Rest};