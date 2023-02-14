import styles from "./styles/stickyheader.css"

class StickyHeader{
    constructor(list){
        this.content = document.createElement("div");
        console.log(list);
        this.content.className = styles["sticky-header"];
        this.content.innerHTML = `
        <div class = "${styles["items-wrapper"]}">
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