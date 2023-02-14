import { StickyHeader } from './StickyHeader';
import styles from "./styles/rest.css";

class Rest {
    constructor(){
        this.content = document.createElement("div");
        this.content.className = styles.rest;
        const stickyHeader = new StickyHeader(["Filters", "Delivery Time", "Rating: 4.0+", "Pure Veg", "Cuisines", "More Filters"]);
        this.content.innerHTML = stickyHeader.get().outerHTML;
    }

    get(){
        console.log(this.content);
        return this.content;
    }
}

export {Rest};