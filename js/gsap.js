gsap.registerPlugin(ScrollTrigger);



/**Constants */
    /**Headers */
const nav = document.querySelectorAll(".header__nav li");
const h1 = document.querySelector(".header__info__main");
const h2 = document.querySelector(".header__info__sub");
const topButton = document.querySelector(".back__top");

    /**Presentation */
const presentation = document.querySelector(".section__presentation");
const prezTitle = presentation.querySelector(".section__title");
const paragraphs = presentation.querySelectorAll(".presentation__section__paragraph p");
const compTitle = presentation.querySelector(".presentation__section__paragraph h3");
const skills = presentation.querySelectorAll(".presentation__skills__list li");
const downloadCV = presentation.querySelector(".section__presentation__links");

    /**Projects */

const project = document.querySelector(".section__projects");
const projectTitle = project.querySelector(".section__title");
const targets = gsap.utils.toArray(".project__element"); 

    /**Contact */
const contact = document.querySelector(".section__contact");
const contactTitle = contact.querySelector(".section__title");
const paragraphContact = contact.querySelector(".section__paragraph p");
const links = gsap.utils.toArray(".section__contact__links"); 

/**when loaded */
document.addEventListener("DOMContentLoaded", function(event) {

    window.onload = function () {


        console.log("je suis loadé");
        var TL = gsap.timeline();

        TL.from(nav, 1.5, { opacity: 0, y: -100, stagger:0.3})
            .from(h1, 1, {duration:1, opacity:0}, "-=0.9")
            .from(h2, 1, {opacity:0}, "-=0.5")
    }

});


/**Presentation animation */
gsap.from(topButton, {
    scrollTrigger: {
        trigger:presentation,
        start: "-20px 80%",
        scrub:true
    },
    duration: 1,
    opacity: 0,

});
gsap.from(prezTitle, {
    scrollTrigger: {
        trigger:presentation,
        start: "-20px 80%",

    },
    duration: 1,
    opacity: 0,
    x: -100
})
gsap.from(paragraphs, {
    scrollTrigger: {
        trigger:paragraphs,
        start: "-20px 80%",
      
    },
    duration: 2,
    opacity: 0
})
gsap.from(compTitle, {
    scrollTrigger: {
        trigger:compTitle,
        start: "-20px 80%",

    },
    duration: 1,
    opacity: 0,
    x: -100
})
gsap.from(skills, {
    scrollTrigger: {
        trigger:skills,
        start: "-20px 80%",

    },
    duration: 1.5,
    opacity: 0,
    stagger:0.2
})
gsap.from(downloadCV, {
    scrollTrigger: {
        trigger:downloadCV,
        start: "-20px 90%",
    },
    duration: 1,
    opacity: 0,
    y: 50
});

/** Projects animation */
gsap.from(projectTitle, {
    scrollTrigger: {
        trigger:projectTitle,
        start: "-20px 80%",
       

    },
    duration: 1,
    opacity: 0,
    x: -100
});
targets.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger:element,
            start: "-20px 80%",
            
           
        },
        duration: 2,
        opacity: 0,
        
    })
});

/**Contact animation */

gsap.from(contactTitle, {
    scrollTrigger: {
        trigger:contactTitle,
        start: "-20px 80%",
       

    },
    duration: 1,
    opacity: 0,
    x: -100
});
gsap.from(paragraphContact, {
    scrollTrigger: {
        trigger:paragraphContact,
        start: "-20px 80%",
        
    },
    duration: 2,
    opacity: 0
})
links.forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger:element,
            start: "-20px 80%",
            
           
        },
        duration: 1,
        opacity: 0,
        y: 50
        
    })
});