import styles from "./styles/subHeader.css";


class SubHeader{
    constructor(){
        this.content = document.createElement('div');
        this.content.innerHTML = `
            <div class = "${styles["full-bleed"]}"></div>
            <div class = "${styles["sub-header"]}  ${styles["max-width-wrapper"]}">
                <div class = "${styles.heading}">Inspiration for your first order</div>
            </div>
        `;
    }

    get(){
        return this.content;
    }
}
export {SubHeader};