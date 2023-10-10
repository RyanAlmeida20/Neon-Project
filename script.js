// Fixed Menu

const header = document.getElementById("js-header");

function fixedMenu() {
  if (window.scrollY > 20) {
    header.classList.add("fixed-menu");
  } else {
    header.classList.remove("fixed-menu");
  }
}
// const video = document.getElementsByClassName("horizontal");
// video.muted = true;
// video.play();

document.addEventListener("scroll", fixedMenu);
