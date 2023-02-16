import styles from "./styles/expandable.module.css";

class Expandable{
    constructor(heading, list, type, id){
        this.isOpen = false;
        this.content = document.createElement("div");
        this.content.className = styles.expandable;
        this.content.innerHTML = `
        <div class = "${styles["heading-wrapper"]}">
            <div class = "${styles.heading}">
                ${heading}
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" 
            id = "a${id}"
            fill="#1C1C1C" width="20" height="20" viewBox="0 0 20 20" 
            aria-labelledby="icon-svg-title- icon-svg-desc-" role="img" 
            class="sc-rbbb40-0 iRDDBk ${styles["arrow-toggle"]}"><title>chevron-down</title><path 
            d="M4.48 7.38c0.28-0.28 0.76-0.28 1.060 0l4.46 4.48 4.48-4.48c0.28-0.28 0.76-0.28 1.060 0s0.28 0.78 0 1.060l-5 5c-0.3 0.3-0.78 0.3-1.060 0l-5-5c-0.3-0.28-0.3-0.76 0-1.060z"></path></svg>
        `;
        if(type == "bullet"){
            const data = document.createElement("div");
            data.className = styles["list-item-wrapper"];
            data.id = "list"+id;
            data.innerHTML = `
                ${list.map((item) => {
                    return `
                    <span class = "${styles["list-item"]}">${item}</span>
                    `;
                }).join(`
                    <span class = "${styles.seperator}"></span>
                `)}
            `;
            this.content.append(data);

        }
        else{
            this.content.append();
        }

        console.log("Here is queryselctor", this.content.querySelector(`#a${id}`));
        this.content.querySelector(`#a${id}`).addEventListener("click", (e) => {
            if(this.isOpen){
                this.content.querySelector(`#list${id}`).classList.remove(`${styles.visible}`);
                this.content.querySelector(`#a${id}`).style.transform = "rotate(0deg)";
            }
            else{
                this.content.querySelector(`#list${id}`).classList.add(`${styles.visible}`);
                this.content.querySelector(`#a${id}`).style.transform = "rotate(-180deg)";
            }
            this.isOpen = !this.isOpen;
        })
    }

    

    get(){
        return this.content;
    }
}

export {Expandable};