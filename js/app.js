/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

const getSectionNavs = ()=> {
    const sections = document.getElementsByTagName("section");
    return Array.from(sections).map(section => section.dataset.nav)
}



const isSectionActive = (section) => {
    const rect = section.getBoundingClientRect();
     const result = rect.bottom  > window.innerHeight / 2 
     && rect.top < window.innerHeight / 2;
     return result;
}

const navToSection = (el)=> {
    const targetSection = document.querySelector(`[data-nav='${el.textContent}']`);
    targetSection.scrollIntoView();
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navs = getSectionNavs();
const navbarList = document.getElementById("navbar__list");
navs.forEach(
  nav => {
    const li = document.createElement("li");
    li.textContent = nav;
    li.classList.add("menu__link");
    li.setAttribute("onclick","navToSection(this);")
    navbarList.appendChild(li);
  }  
);

// Add class 'active' to section when near top of viewport

const highlightActiveSection = ()=> {
    //Find section being displayed
    const sections = document.querySelectorAll("section");
    sections.forEach(
        section => section.classList.remove("your-active-class")
    );
    const activeSection =  Array.from(sections).find(
        section => isSectionActive(section)
    );
    if (activeSection) {
        //Highlight active section
        activeSection.classList.add("your-active-class");
        //Highlight the corresponding navbar items as well 
        const navLinks = document.querySelectorAll(".menu__link");
        navLinks.forEach(navLink=> navLink.classList.remove("menu__link--active"));
        const navLink = Array.from(navLinks).find(
            navLink => navLink.textContent === activeSection.dataset.nav
        );
        navLink.classList.add("menu__link--active");
    } 
    
    
}


// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
// Scroll to section on link click
window.addEventListener("scroll",highlightActiveSection);
// Set sections as active


