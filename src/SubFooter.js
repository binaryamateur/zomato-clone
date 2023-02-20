import { Expandable } from "./Expandable";
import styles from "./styles/subfooter.module.css";

class SubFooter {
	constructor() {
		this.content = document.createElement("section");
		this.content.className = styles["sub-footer-wrapper"];
		const heading = document.createElement("div");
		heading.className = styles["heading"];
		heading.innerHTML = "Explore options near me";
		const expandablesList = document.createElement("div");
		expandablesList.append(
			new Expandable(
				"Popular cuisines Near me",
				["Bakeries near me", "Beverage shops near me", "Biriyani near me"],
				"bullet",
				0
			).get(),
			new Expandable(
				"Popular cuisines Near me",
				[
					"Bakeries near me",
					"Beverage shops near me",
					"Biriyani near me",
					"Biriyani near me",
					"Biriyani near me",
					"Biriyani near me",
					"Biriyani near me",
					"Biriyani near me",
					"Biriyani near me",
					"Biriyani near me",
					"Biriyani near me",
				],
				"bullet",
				1
			).get(),
			new Expandable(
				"Popular cuisines Near me",
				["Bakeries near me", "Beverage shops near me", "Biriyani near me"],
				"bullet",
				2
			).get()
		);
		const subFooter = document.createElement("div");
		subFooter.className = `${styles["sub-footer"]} ${styles["max-width-wrapper"]}`;
		subFooter.append(heading);
		subFooter.append(expandablesList);
		this.content.append(subFooter);
	}

	get() {
		return this.content;
	}
}

export { SubFooter };
