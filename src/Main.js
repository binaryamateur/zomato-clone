import { Card } from "./Card";
import styles from "./styles/main.module.css";


class Main{
    constructor(){
        this.content = document.createElement("div");
        this.content.className = styles.main;
        this.content.classList.add(styles["max-width-wrapper"]);
        this.content.innerHTML = `
            <div class = "${styles.heading}">Delivery Restaurants in Thakur Wara, Sohna, India</div>
            <div class  = "${styles["restaurant-list"]}">
                ${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 26, 3.1,"North Indian, Chinese", 150, 1125).get().outerHTML}
                ${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 24, 3.2,"North Indian", 350, 500).get().outerHTML}
                ${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}
            </div>
        `;
    }

    get(){
        return this.content;
    }

}

export {Main};