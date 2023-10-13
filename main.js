const showHideMenu = () => {
  let menu = document.getElementById("nav");
  menu.classList.toggle("responsive");
};

let hamburguerBotton = document.getElementById("hamburguerBotton");
hamburguerBotton.addEventListener("click", showHideMenu);

let selectors = document.querySelectorAll("#select");
for (let i = 0; i < selectors.length; i++) {
  selectors[i].addEventListener("click", showHideMenu);
}

window.addEventListener("load", function () {
  new Glider(document.querySelector(".carousel__list"), {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: ".carousel__indicators",
    arrows: {
      prev: ".carousel__before",
      next: ".carousel__next",
    },
    // responsive: [
    // 	{
    // 	  // screens greater than >= 775px
    // 	  breakpoint: 450,
    // 	  settings: {
    // 		// Set to `auto` and provide item width to adjust to viewport
    // 		slidesToShow: 2,
    // 		slidesToScroll: 2
    // 	  }
    // 	},{
    // 	  // screens greater than >= 1024px
    // 	  breakpoint: 800,
    // 	  settings: {
    // 		slidesToShow: 4,
    // 		slidesToScroll: 4
    // 	  }
    // 	}
    // ]
  });
});
