 
// // const bars = document.querySelector(".fa-bars"),
// //       navbarNav = document.querySelector(".navbar_nav"),
// //       nav = navbarNav.querySelectorAll(".navbar_nav a");

// //       bars.addEventListener("click", () =>{
// //         navbarNav.classList.toggle("show");
// //         navbarNav.classList.remove("hide");
      
// //       } );
// //       navbarNav.addEventListener("click", (e) =>{
// //         e.target
// //         nav.forEach((item) =>{
// //           if(e.target == item   ){
// //             setTimeout(() =>{
// //                navbarNav.classList.add("hide");
// //             }, 500)
// //           }
// //         })
// //       });

//       // setTimeout(() => {
//       //   navbarNav.classList.add("hide")
//       // }, 3500);

//       const addNavigation = document.querySelector('.add__navigation');
// const bars = document.querySelector('.fa-bars'),
//     closeBars = document.querySelector('.close__bars');

// bars.addEventListener('click', ()=>{
//     addNavigation.classList.remove('hide');
//     addNavigation.classList.add('roll-in-right', 'show');
    
// });
// closeBars.addEventListener('click', ()=>{
//     addNavigation.classList.remove('roll-in-right', 'show');
//     addNavigation.classList.add('hide');
// });
// addNavigation.addEventListener('click', (Event)=>{
    
//     if(Event.target){
//         function barsShow(){
//             setTimeout(() => {
//                 addNavigation.classList.add('hide');
//                 addNavigation.classList.remove('show','fade'); 
//                 clearTimeout(timirBars);
//             }, 1000);     

//         }
 
//         barsShow();
 
//     }
// });


// navigation 2
const faBars = document.querySelector(".fa-bars"),
      navigation = document.querySelector(".navigation");
      

      faBars.addEventListener("click", ( ) => {
        navigation.classList.add("navigation__add");
        if( navigation.classList.contains("navigation__add")){
            navigation.classList.toggle("navigation__remove");
        };
      });