import styles from "./styles/index.module.css";
import { Header } from "./Header.js";
import { Rest } from "./Rest";
import { SubHeaderWrapper } from "./SubHeaderWrapper";

const body = document.body;
console.log(styles);
// app.classList.add(styles.app);
// app.classList.add(styles["max-width-wrapper"]);



const header = new Header(
	"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
	"Log in",
	"Sign up",
	[
		["Thakur Wara", "Sohna", "India"],
		["Tilka Manjhi", "Bihar", "India"],
		["Eastern Reef", "Sydney", "Australia"],
	]
);
console.log(header);
body.append(header.get());
const subHeaderWrapper = new SubHeaderWrapper();
body.append(subHeaderWrapper.get());
const rest = new Rest(
	"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",-1
);
body.append(rest.get());


body.addEventListener("click", (e) => {
	console.log(e.target);
	let ele = e.target.closest(".food-item");
	console.log(ele);
	if(ele){
		console.log(ele.id);
		console.log("YES!!");
		let id = ele.id;
		console.log(id);
		body.innerHTML = ``;
		switch(id){
			case "food0": 
				body.append(header.get());
				console.log("Hello I am here");
				body.append(subHeaderWrapper.get());
				const rest0 = new Rest(
					"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",0
				);
				body.append(rest0.get());
				break;
			case "food1": 
				body.append(header.get());
				body.append(subHeaderWrapper.get());
				const rest1 = new Rest(
					"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",1
				);
				body.append(rest1.get());
				break;
			case "food2": 
				body.append(header.get());
				body.append(subHeaderWrapper.get());
				const rest2 = new Rest(
					"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",2
				);
				body.append(rest2.get());
				break;
			default: 
				body.append(header.get());
				body.append(subHeaderWrapper.get());
				const rest = new Rest(
					"https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",-1
				);
				body.append(rest.get());
				break;
		}
	}
	else{
		console.log("NO!!");
	}
})