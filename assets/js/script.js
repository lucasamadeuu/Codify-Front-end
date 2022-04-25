// MENU

let menuMobileIcon = document.querySelector(".menu-icon");
let menuMobileArea = document.querySelector(".navbar-mobile");

menuMobileIcon.addEventListener("click", () => {
    if(menuMobileArea.classList.contains("closed")) {
        menuMobileArea.classList.remove("closed");
        menuMobileArea.classList.add('open');
    } else {
        menuMobileArea.classList.remove("open");
        menuMobileArea.classList.add("closed");
    }
});