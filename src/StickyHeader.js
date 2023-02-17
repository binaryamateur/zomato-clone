import styles from "./styles/stickyheader.module.css"

class StickyHeader{
    constructor(list){
        this.content = document.createElement("nav");
        console.log(list);
        this.content.className = styles["sticky-header"];
        // this.content.classList.add(styles["max-width-wrapper"]);
        this.content.innerHTML = `
        <ul class = "${styles["items-wrapper"]}  ${styles["max-width-wrapper"]}">
            ${list.map(item => {
                return `
                    <li class = ${styles.button}>
                        ${item}
                    </li>`;
            }).join('')}
        </ul>

        `;
    }

    get(){
        return this.content;
    }
}

export {StickyHeader}