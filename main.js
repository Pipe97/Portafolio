const showHideMenu = () => {
  let menu = document.getElementById("nav");
  menu.classList.toggle("responsive");
};


let hamburguerBotton = document.getElementById("hamburguerBotton")
hamburguerBotton.addEventListener("click",showHideMenu)

let selectors = document.getElementById("#select")
for (let i = 0; i < selectors.length; i++) {
     selectors[i].addEventListener("click",showHideMenu)
    
}



// const showHideMenu = () => {
//   let menu = document.getElementById("nav");
//   menu.classList.toggle("responsive");
// };
// let hambuguerBotton = document.getElementById("hamburgerbotton");
// hambuguerBotton.addEventListener("click", showHideMenu);
// let selectors = document.querySelectorAll("#select")
// for (let i = 0; i < selectors.length; i++) {
//  selectors[i].addEventListener("click",showHideMenu)

// }
