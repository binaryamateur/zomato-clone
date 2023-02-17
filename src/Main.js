import { Card } from "./Card";
import styles from "./styles/main.module.css";


class Main{
    constructor(){
        this.content = document.createElement("main");
        this.content.classList.add(styles["max-width-wrapper"]);
        this.content.innerHTML = `
            <div class = "${styles.heading}">Delivery Restaurants in Thakur Wara, Sohna, India</div>
            <ul class  = "${styles["restaurant-list"]}">
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 26, 3.1,"North Indian, Chinese", 150, 1125).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 24, 3.2,"North Indian", 350, 500).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
                <li>${new Card("Carribean Pizza", "https://b.zmtcdn.com/data/pictures/4/19133644/711f8275e6e320a447c52854ed9f2f88_o2_featured_v2.jpg", 50, 100, 21, 3.4, "North Indian, Mughlai, Chinese", 200, 700).get().outerHTML}</li>
            </ul>

            <div class = "${styles["search-end-wrapper"]}">
                <div class = "${styles["search-end"]}">
                    End of search results
                </div>
                <div class = ${styles["search-end-image-wrapper"]}>
                    <img alt="End of search results" 
                    src="https://b.zmtcdn.com/web/assets/search/6d548ba48f0e4e4b46c19ad4b15a3f011615379209.jpeg" 
                    class = "${styles["search-end-image"]}" />
                </div>
            </div>
        `;
    }

    get(){
        return this.content;
    }

}

export {Main};