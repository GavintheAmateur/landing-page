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

const section = {
    id:"section1",
    nav:"Section 1",
    isActive:false,
    content:""
}

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
    // console.log(section.textContent);

    const rect = section.getBoundingClientRect();
     const result = rect.bottom  > window.innerHeight / 2 
     && rect.top < window.innerHeight / 2;

    //  console.log(window.innerHeight / 2);
    //  console.log(rect);
    //  console.log(rect.bottom  > window.innerHeight / 2);
    //  console.log(rect.top < window.innerHeight / 2);
    //  console.log(result);
     return result;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navs = getSectionNavs()
const navbarList = document.getElementById("navbar__list")
navs.forEach(
  nav => {
    const li = document.createElement("li");
    li.textContent = nav;
    li.classList.add("menu__link");
    navbarList.appendChild(li);
  }  
);

const highlightActiveSection = ()=> {
    const sections = document.querySelectorAll("section");
    sections.forEach(
        section => section.classList.remove("your-active-class")
    );
    const activeSection =  Array.from(sections).filter(
        section => isSectionActive(section)
    );
    console.log(activeSection);
    activeSection[0]?activeSection[0].classList.add("your-active-class"):null;
    
    
}

// Add class 'active' to section when near top of viewport


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


