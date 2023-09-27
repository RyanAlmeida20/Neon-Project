// DROPDOWN

const btnDropdown = document.querySelector(".js-btn-dropdown");
const dropdown = document.querySelector(".js-dropdown");

function openDropdown(event) {
  event.preventDefault();

  dropdown.classList.toggle("active");
}

btnDropdown.addEventListener("click", openDropdown);

dropdown.addEventListener("mouseleave", openDropdown);

// Fixed Menu

const header = document.getElementById("js-header");

function fixedMenu() {
  if (window.pageYOffset > 719) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}

console.log(window.scrollY);

document.addEventListener("scroll", fixedMenu);

// Menu Mobile

const btnMenu = document.getElementById("js-btn-menu-mobile");
const overlayMenu = document.querySelector(".js-overlay");

function openMenuMobile() {
  document.documentElement.classList.toggle("menu-opened");
}

btnMenu.addEventListener("click", openMenuMobile);

overlayMenu.addEventListener("click", openMenuMobile);
