/*
 Define Global Variables
 */
const sections = Array.from(document.querySelectorAll("section"));
const menu = document.getElementById("navbar__list");
let numberOfListItems = sections.length;

/*
End Global Variables
Start Helper Functions
 */
function createListItem() {
	for (section of sections) {
		sectioName = section.getAttribute("data-nav");
		sectionLink = section.getAttribute("id");
		//create an item for each one
		listItem = document.createElement("li");

		// add the item text here
		listItem.innerHTML = `<a class='menu__link' href='#${sectionLink}'>${sectioName}</a>`;

		// add listItem to the menu here
		menu.appendChild(listItem);
	}
}

//Determines if sections is in the viewport
function sectionInViewPort(elem) {
	let sectionPos = elem.getBoundingClientRect();
	return sectionPos.top >= 0;
}

//if the section being viewed give a different style (appearance)
function toggleActiveClass() {
	for (section of sections) {
		//if the section is in the viewport
		if (sectionInViewPort(section)) {
			//check if it doesn't already contain "your-active-class"
			if (!section.classList.contains("your-active-class")) {
				//then add it
				section.classList.add("your-active-class");
			}
		} else {
			//if it's not there then remove "your-active-class"
			section.classList.remove("your-active-class");
		}
	}
}

// End Helper Functions

// build the nav
createListItem();

// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", toggleActiveClass);
