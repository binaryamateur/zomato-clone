import styles from "./styles/card.module.css";


class Card{
    constructor(restaurantName, image, discount, upto, time, rating, type, cost, orders_placed){
        this.restaurantName = restaurantName;
        this.image = image; 
        this.content = document.createElement("div");
        this.content.className = styles.card;
        this.content.innerHTML = `
        
        <div class = "${styles["image-wrapper"]}">
            <img src = ${image}
            class = "${styles["restaurant-image"]}"
            />
            <div class = "${styles["discount-band"]}">
                ${discount}% OFF up to ${upto}
            </div>
            <div class = "${styles["delivery-time"]}">
                ${time} min
            </div>
        </div>
        <div class = "${styles["name-and-rating-wrapper"]}">
            <div class ="${styles["restaurant-details"]}">
                ${restaurantName}
            </div>
            <div class = "${styles["rating-wrapper"]}">
                <div class ="${styles.rating}">${rating}</div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.6rem" height="0.6rem" 
                viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" 
                class="sc-rbbb40-0 fauQLv"><title>star-fill</title>
                <path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg>
            </div>
            </div>
        </div>
        <div class = "${styles["type-and-cost-wrapper"]}">
            <div class ="${styles["type"]}">
                ${type}
            </div>
            <div class ="${styles["cost"]}">
                ₹${cost} for one
            </div>  
        </div>
        <div class = "${styles["orders-placed"]}">
            <img alt="image" 
            src="https://b.zmtcdn.com/data/o2_assets/4bf016f32f05d26242cea342f30d47a31595763089.png" 
            class = "${styles["orders-placed-image"]}"/>
            <div>
                ${orders_placed}+ orders placed from here recently
            </div>
        </div>
        `;
    }

    get(){
        return this.content;
    }
}

export {Card};