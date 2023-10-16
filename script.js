// Fixed Menu

const header = document.getElementById("js-header");

function fixedMenu() {
  if (window.scrollY > 20) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}

document.addEventListener("scroll", fixedMenu);
