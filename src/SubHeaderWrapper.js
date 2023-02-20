import { StickyHeader } from "./StickyHeader";
import { SubHeader } from "./SubHeader";
import styles from "./styles/subheaderwrapper.module.css";

class SubHeaderWrapper{
    constructor(){
        this.content = document.createElement('section');
        this.content.className = styles["sub-header-wrapper"];
        const stickyHeader = new StickyHeader(["Filters", "Delivery Time", "Rating: 4.0+", "Pure Veg", "Cuisines", "More Filters"]);
        const subHeader = new SubHeader();
        this.content.append(stickyHeader.get());
        this.content.append(subHeader.get());

    }

    get(){
        return this.content;
    }
}

export {SubHeaderWrapper};