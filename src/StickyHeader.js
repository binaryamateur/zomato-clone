import styles from "./styles/stickyheader.css"

class StickyHeader{
    constructor(list){
        this.content = document.createElement("div");
        console.log(list);
        this.content.className = styles["sticky-header"];
        // this.content.classList.add(styles["max-width-wrapper"]);
        this.content.innerHTML = `
        <div class = "${styles["items-wrapper"]}  ${styles["max-width-wrapper"]}">
            ${list.map(item => {
                return `
                    <div class = ${styles.button}>
                        ${item}
                    </div>`;
            }).join('')}
        </div>

        `;
    }

    get(){
        return this.content;
    }
}

export {StickyHeader}