import styles from "./styles/mainheader.module.css";

class MainHeader {
	constructor() {
		this.content = document.createElement("section");
		this.content.className = styles["max-width-wrapper"];
		this.content.classList.add(styles["main-header"]);
		this.content.innerHTML = `
        <div class = "${styles.heading}">Delivery Restaurants in Thakur Wara, Sohna, India</div>
        `;
	}
	get() {
		return this.content;
	}
}

export { MainHeader };
