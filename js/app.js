app = {
    
    init: function() {
        
        app.addYear();

        const allPlusElement = document.querySelectorAll(".span__plus");
      
        allPlusElement.forEach(element => {
            element.addEventListener("click", app.openInfo);
        });
    },

    /**
     * Method to open the div info of projects on click
     * @param {} evt 
     */
    openInfo: function(evt) {
        let plusElement = evt.currentTarget;
        
        const projectElement = plusElement.closest(".project__element");
        
        let infoElement = projectElement.querySelector(".project__element__infos");

        infoElement.classList.toggle("project__element__infos--ishidden");
        infoElement.classList.toggle("project__element__infos--isshown");
        plusElement.querySelector(".fa-plus").classList.toggle("fa-plus--rotate");
    },

    /**
     * Method to add the current year in footer
     */
    addYear : function(){
        date = new Date;
        annee = date.getFullYear();

        span = document.getElementById("year");
        span.textContent = annee;

    }
    


}

app.init();