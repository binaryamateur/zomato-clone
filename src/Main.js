import styles from "./styles/main.module.css";

class Main{
    constructor(){
        this.content = document.createElement("div");
        this.content.className = styles.main;
        this.content.classList.add(styles["max-width-wrapper"]);
        this.content.innerHTML = `
            <div class = "${styles.heading}">Delivery Restaurants in Thakur Wara, Sohna, India</div>
        `;
    }

    get(){
        return this.content;
    }

}

export {Main};