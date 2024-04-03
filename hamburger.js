function hamburger_menu() {
    const menu = document.querySelector('.header__navbar__items');

    if(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 500){
        console.log("zacatek penisu")
    if (menu.classList.contains('hamburger--show')) {
        menu.classList.remove("hamburger--show");
        console.log("penis uspech 1")
    } else {
        menu.classList.add("hamburger--show");
        console.log("penis uspech 2")
    }
}
}