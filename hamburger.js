function hamburger_menu() {
    const menu = document.querySelector('.header__navbar__items');

    if (menu.classList.contains('hamburger--show')) {
        menu.classList.remove("hamburger--show");
    } else if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 500){
        menu.classList.add("hamburger--show");
    }
}