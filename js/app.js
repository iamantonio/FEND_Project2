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

  a.href = `#${id}`;
  a.className = `menu__link`;
  a.id = `${id}-link`;
  a.textContent = dataNav;

  li.appendChild(a);
  fragment.appendChild(li);
}

navbarList.appendChild(fragment);

// Set sections as active

window.addEventListener("scroll", (e) => {
  let navLinks = document.querySelectorAll("nav ul li a");
  let fromTop = window.scrollY;

  navLinks.forEach((link) => {
    let sectionLink = document.querySelector(link.hash);

    console.log(link);

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
