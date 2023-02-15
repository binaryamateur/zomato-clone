import styles from  './styles/header.module.css';

class Header {
    constructor(logoUrl, button1, button2, locations){
        this.content = document.createElement('div');
        this.content.className = styles.header;
        this.content.classList.add(styles["max-width-wrapper"]);
        this.content.innerHTML = `
        <div class = "${styles.top}">
            <div class = "${styles.logo}">
                <img class ="${styles.logo}" src = ${logoUrl} />
            </div>
            <div class = "${styles["input-wrapper"]}">
            <svg xmlns="http://www.w3.org/2000/svg"
             fill="#FF7E8B" width="20" height="20" 
             viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" 
             role="img" class="sc-rbbb40-0 iRDDBk"><title>location-fill</title>
             <path d="M10.2 0.42c-4.5 0-8.2 3.7-8.2 8.3 0 6.2 7.5 11.3 7.8 11.6 0.2 0.1 0.3 0.1 0.4 0.1s0.3 0 0.4-0.1c0.3-0.2 7.8-5.3 7.8-11.6 0.1-4.6-3.6-8.3-8.2-8.3zM10.2 11.42c-1.7 0-3-1.3-3-3s1.3-3 3-3c1.7 0 3 1.3 3 3s-1.3 3-3 3z"></path></svg>
                <select class = "${styles["joined-input"]} ${styles["address"]}">
                    ${locations.map((item, index)=>{
                        return `
                        <option value = ${index}>${item.join(', ')}</option>
                        `;
                    })}
                    
                </select>
                <div class = "${styles.line}"></div>
                <svg xmlns="http://www.w3.org/2000/svg" 
                fill="#828282" width="18" height="18" 
                viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" 
                role="img" class="sc-rbbb40-0 iwHbVQ"><title>Search</title>
                <path d="M19.78 19.12l-3.88-3.9c1.28-1.6 2.080-3.6 2.080-5.8 0-5-3.98-9-8.98-9s-9 4-9 9c0 5 4 9 9 9 2.2 0 4.2-0.8 5.8-2.1l3.88 3.9c0.1 0.1 0.3 0.2 0.5 0.2s0.4-0.1 0.5-0.2c0.4-0.3 0.4-0.8 0.1-1.1zM1.5 9.42c0-4.1 3.4-7.5 7.5-7.5s7.48 3.4 7.48 7.5-3.38 7.5-7.48 7.5c-4.1 0-7.5-3.4-7.5-7.5z"></path></svg>
                <input class = "${styles["joined-input"]} ${styles["search"]}"/>
            </div> 
            <div class = "${styles["side-buttons"]}">
                <div class  = "${styles["side-button"]}">${button1}</div>
                <div class  = "${styles["side-button"]}">${button2}</div>
            </div>
            <img class = "${styles.menu}" src="https://img.icons8.com/ios-filled/50/null/menu-rounded.png"/>
        </div>
        <div>
            <span class = "${styles.links}">
                <span class = "${styles.link} home">Home</span>
                <span class = "${styles.seperator}">/</span> 
                <span class = "${styles.link} country">${locations[0][2]}</span>
                <span class = "${styles.seperator}">/</span>
                <span class = "${styles.link} locality">${locations[0][1]}</span>
                <span class = "${styles.seperator}">/</span>
                <span class = "${styles.location} location">${locations[0][0]} Restaurants</span>
            </span>
        </div>
        `;

        this.content.querySelector('select').addEventListener("change", (e)=>{
            console.log(e.target.value);
            const country = this.content.querySelectorAll(".country");
            console.log(country);
            country[0].innerText = locations[e.target.value][2];
            const locality = this.content.querySelectorAll(".locality");
            locality[0].innerText = locations[e.target.value][1];
            const location = this.content.querySelectorAll(".location");
            location[0].innerText = locations[e.target.value][0] + " Restaurants";
        })
    }

    get(){
        return this.content;
    }
}

export {Header};