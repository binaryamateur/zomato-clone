import styles from "./styles/subHeader.module.css";
import { PICTURES } from "../constants";

class SubHeader{
    constructor(){
        // console.log(coreStyles);
        // console.log(optionStyles);
        console.log(styles);
        this.content = document.createElement('div');
        this.content.className = styles["sub-header-wrapper"];
        this.currentFoodItem = 0;
        this.content.innerHTML = `
            <div class = "${styles["full-bleed"]}"></div>
            <div class = "${styles["sub-header"]}  ${styles["max-width-wrapper"]}">
                <div class = "${styles.heading}">Inspiration for your first order</div>
                <div class =  "${styles.left} ${styles.arrow} ${styles.hidden}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                    <path d="M15.293 3.293 6.586 12l8.707 8.707 1.414-1.414L9.414 12l7.293-7.293-1.414-1.414z"/></svg>
                </div>
                <div class = "${styles["food-list"]} ">
                    ${PICTURES.map((item,index) => {
                        return `
                            <div id = "food${index}" class = "${styles["food-item"]}">
                                <img src = ${item.url} class = "${styles["food-image"]}" />
                                <div class = "${styles["food-label"]}">${item.food}</div>
                            </div>
                        `;
                    }).join('')}
                </div>
                <div class = "${styles.right}  ${styles.arrow}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"/></svg>
                </div>
            </div>
        `;
        this.content.querySelector(`.${styles.right}`).addEventListener("click", (e)=>{
            console.log("Here is event",e);
            console.log(this.currentFoodItem);
            const current = document.querySelector(`#food${this.currentFoodItem}`);
            console.log(current);
            var style = current.currentStyle || window.getComputedStyle(current)
            document.querySelector(`.${styles["food-list"]}`).style.transform =`translateX(${(this.currentFoodItem+1) * (-Number(current.offsetWidth) - Number(style.marginRight.slice(0,-2)))}px)`;
            this.currentFoodItem++;
            if(this.currentFoodItem > 0){
                if(document.querySelector(`.${styles.left}`).classList.contains(`${styles.hidden}`)){
                    console.log("I am here");
                    document.querySelector(`.${styles.left}`).classList.remove(`${styles.hidden}`);
                }
            }
            if(this.currentFoodItem == 6){
                if(!document.querySelector(`.${styles.right}`).classList.contains(`${styles.hidden}`)){
                    console.log("I am here");
                    document.querySelector(`.${styles.right}`).classList.add(`${styles.hidden}`);
                }
            }
        })

        this.content.querySelector(`.${styles.left}`).addEventListener("click", (e)=>{
            console.log("Here is event",e);
            const current = document.querySelector(`#food${this.currentFoodItem}`);
            console.log(current);
            var style = current.currentStyle || window.getComputedStyle(current)
            this.currentFoodItem--;
            document.querySelector(`.${styles["food-list"]}`).style.transform =`translateX(${(this.currentFoodItem) * (-Number(current.offsetWidth) - Number(style.marginRight.slice(0,-2)))}px)`;
            
            if(this.currentFoodItem < 1){
                if(!document.querySelector(`.${styles.left}`).classList.contains(`${styles.hidden}`)){
                    console.log("I am here");
                    document.querySelector(`.${styles.left}`).classList.add(`${styles.hidden}`);
                }
            }
            if(this.currentFoodItem < 6){
                if(document.querySelector(`.${styles.right}`).classList.contains(`${styles.hidden}`)){
                    console.log("I am here");
                    document.querySelector(`.${styles.right}`).classList.remove(`${styles.hidden}`);
                }
            }

        })

    }

    get(){
        return this.content;
    }
}
export {SubHeader};