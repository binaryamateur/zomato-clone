import { LIST } from "../constants";
import { Card } from "./Card";
import styles from "./styles/main.module.css";


class Main{
    constructor(id){
        this.content = document.createElement("main");
        this.content.classList.add(styles["max-width-wrapper"]);
        this.content.innerHTML = `
            <ul class  = "${styles["restaurant-list"]}">
                ${LIST[id+1].restaurantList.map(item => {
                    return `
                    <li>${new Card(
                        item.name,
                        item.imgUrl,
                        item.off,
                        item.upto,
                        item.time,
                        item.rating,
                        item.types,
                        item.cost,
                        item.order_placed
                    ).get().outerHTML}</li>    
                    `;
                }).join("")}
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