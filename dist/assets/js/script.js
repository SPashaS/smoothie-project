function burgerMenu() {
    let burgerIcon = document.querySelector('.header__burger-btn');
    let headerNavigation = document.querySelector('.header__navigation');


    burgerIcon.addEventListener('click', function() {
        headerNavigation.classList.toggle('header__navigation_active')
        burgerIcon.classList.toggle('header__burger-btn-close')
    })
}
burgerMenu();



let anchors = document.querySelectorAll("a[href*='#']");

for (let anchor of anchors) {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        let blockID = anchor.getAttribute("href");
        document.querySelector(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

const goTop = document.querySelector(".goTop");

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 400) {
        goTop.style.display = "block"
    } else {
        goTop.style.display = "none"
    }
})

//# sourceMappingURL=script.js.map
