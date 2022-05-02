//animacion inicial
const containerSpinner = document.getElementById(`containerSpinner`);
const containerIndex = document.getElementById(`containerIndex`);
setTimeout(() => {
    containerSpinner.innerHTML = `<section class="animate__animated animate__flipInX" class="container-logo" ><img src="./images/main/logo.png" class="img-fluid" alt="..."></section>`
  }, 1500);
  setTimeout(() => {
    containerSpinner.innerHTML = `<section class="animate__animated animate__bounce" class="container-logo" ><img src="./images/main/logo.png" class="img-fluid" alt="..."></section>`
  }, 2500);
  setTimeout(() => {
    containerSpinner.innerHTML = `<section class="animate__animated animate__zoomOutUp " class="container-logo" ><img src="./images/main/logo.png" class="img-fluid" alt="..."></section>`
  }, 3500);
  setTimeout(() => {
    containerSpinner.style.display = "none";
    containerIndex.style.display = "flex";
  }, 4100);
//fin animacion inicial

//navmenu hamburguesa desplegable

const toggle = document.querySelector(`.toggle`);
const navMenu = document.querySelector(`.nav-menu`);

toggle.addEventListener(`click`,()=>{
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains(`nav-menu_visible`)){
    toggle.setAttribute(`aria-label`, "Close Menu");
  }else{
    toggle.setAttribute(`aria-label`, "Open Menu");
  }
});

  