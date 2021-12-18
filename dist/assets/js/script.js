function burgerMenu() {
    let burgerIcon = document.querySelector('.header__burger-btn');
    let headerNavigation = document.querySelector('.header__navigation');


    burgerIcon.addEventListener('click', function() {
        headerNavigation.classList.toggle('header__navigation_active')
        burgerIcon.classList.toggle('header__burger-btn-close')
    })
}


burgerMenu();

//# sourceMappingURL=script.js.map
