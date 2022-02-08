function burgerMenu() {
    let burgerIcon = document.querySelector('.header__burger');
    let headerNavigation = document.querySelector('.header__navigation');
    let body = document.querySelector('body');
    burgerIcon.addEventListener('click', function() {
        headerNavigation.classList.toggle('header__navigation--active');
        burgerIcon.classList.toggle('header__burger--active');
        body.classList.toggle('_lock');
    })
}
burgerMenu();



let anchors = document.querySelectorAll("a[href^='#']");
console.log (anchors);
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
