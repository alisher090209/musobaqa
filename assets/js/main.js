 
const bars = document.querySelector(".fa-bars"),
      navbarNav = document.querySelector(".navbar_nav"),
      nav = navbarNav.querySelectorAll(".navbar_nav a");

      bars.addEventListener("click", () =>{
        navbarNav.classList.toggle("show");
        navbarNav.classList.remove("hide");
      
      } );
      navbarNav.addEventListener("click", (e) =>{
        e.target
        nav.forEach((item) =>{
          if(e.target == item   ){
            setTimeout(() =>{
               navbarNav.classList.add("hide");
            }, 500)
          }
        })
      });

      // setTimeout(() => {
      //   navbarNav.classList.add("hide")
      // }, 3500);