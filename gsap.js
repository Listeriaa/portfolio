document.addEventListener("DOMContentLoaded", function(event) {
  
    window.onload = function () {
        const nav = document.querySelector(".header__nav")
        const h1 = document.querySelector(".header__info__main");
        const h2 = document.querySelector(".header__info__sub");
    
        console.log("je suis loadé");
        var TL = gsap.timeline();
        
        TL.from(nav,2, {opacity: 0, y: -100})
            .from(h1, 1, {opacity:0}, "-=0.8")
            .from(h2, 1, {opacity:0}, "-=0.5")
    }
  
});

