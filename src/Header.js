import styles from  './styles/header.css';

class Header {
    constructor(logoUrl, button1, button2){
        this.content = document.createElement('div');
        this.content.className = styles.header;
        this.content.innerHTML = `
        <div class = "${styles.top}">
            <div class = "${styles.logo}">
                <img class ="${styles.logo}" src = ${logoUrl} />
            </div>
            <div class = "${styles["input-wrapper"]}">
                <select class = "${styles["joined-input"]} ${styles["address"]}">
                <input class = "${styles["joined-input"]} ${styles["search"]}">
            </div> 
            <div class = "${styles["side-buttons"]}">
                <div>${button1}</div>
                <div>${button2}</div>
            </div>
            <img class = "${styles.menu}" src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png"/>
        </div>
        <div>
            <span class = "${styles.links}">
                <span class = "${styles.link}">Home</span>
                <span class = "${styles.seperator}">/</span> 
                <span class = "${styles.link}">India</span>
                <span class = "${styles.seperator}">/</span>
                <span class = "${styles.link}">Sohna</span>
                <span class = "${styles.seperator}">/</span>
                <span class = "${styles.location}">Thakur Wara Restaurants</span>
            </span>
        </div>
        `;
        
    }

    get(){
        return this.content;
    }
}

export {Header};