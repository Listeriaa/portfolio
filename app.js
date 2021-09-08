app = {
    init: function() {
        const allPlusElement = document.querySelectorAll(".span__plus");
        
        allPlusElement.forEach(element => {
            element.addEventListener("click", app.openInfo);
        });
    },

    openInfo: function(evt) {
        let plusElement = evt.currentTarget;
        
        const projectElement = plusElement.closest(".project__element");
        
        let infoElement = projectElement.querySelector(".project__element__infos");

        infoElement.classList.toggle("project__element__infos--ishidden");
        infoElement.classList.toggle("project__element__infos--isshown");
        plusElement.querySelector(".fa-plus").classList.toggle("fa-plus--rotate");
    }
}

app.init();