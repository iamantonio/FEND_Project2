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

/*** Define Global Variables ***/

const navbarList = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section"); // Grab all sections on the site.
const span = document.getElementsByTagName("span");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 */

// Build menu

// Iterate through section tags of site to build Nav Bar
for (item of sections) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  let id = item.id;
  let dataNav = item.dataset.nav;

  // Building the nav bar
  a.href = `#${id}`;
  a.className = `menu__link`;
  a.id = `${id}-link`;
  a.textContent = dataNav;

  li.appendChild(a);
  fragment.appendChild(li);
}
// Append the nav bar to the header section
navbarList.appendChild(fragment);

// Set sections as active
// Event listener to listen for a scroll event when the user scrolls.
window.addEventListener("scroll", (e) => {
  let navLinks = document.querySelectorAll("nav ul li a");
  let fromTop = window.scrollY + 400;

  // Loop to iterate each section and then check if it's at the top of the scroll window.
  navLinks.forEach((link) => {
    let sectionLink = document.querySelector(link.hash);
    // Conditional based on the coordinates of the section will set both section and nav section to active.
    if (
      sectionLink.offsetTop <= fromTop &&
      sectionLink.offsetTop + sectionLink.offsetHeight > fromTop
    ) {
      sectionLink.classList.add("your-active-class");
      link.classList.add("active");
    } else {
      sectionLink.classList.remove("your-active-class");
      link.classList.remove("active");
    }
  });
});
