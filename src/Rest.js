import { Main } from './Main';
import { StickyHeader } from './StickyHeader';
import styles from "./styles/rest.module.css";
import { SubFooter } from './SubFooter';
import { SubHeader } from './SubHeader';

class Rest {
    constructor(){
        this.content = document.createElement("div");
        this.content.className = styles.rest;
        const stickyHeader = new StickyHeader(["Filters", "Delivery Time", "Rating: 4.0+", "Pure Veg", "Cuisines", "More Filters"]);
        const subHeader = new SubHeader();
        const main = new Main();
        const subFooter = new SubFooter;
        console.log(subHeader);
        this.content.append(stickyHeader.get());
        this.content.append(subHeader.get());
        this.content.append(main.get());
        this.content.append(subFooter.get());
        // this.content.innerHTML = `
        //     ${stickyHeader.get().outerHTML}
        //     ${subHeader.get().outerHTML}
        // `;
        
    }

    get(){
        console.log(this.content);
        return this.content;
    }
}

export {Rest};