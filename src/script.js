const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

const aboutme = document.querySelector("#aboutme");
const myprojects = document.querySelector("#myprojects");
const contactme = document.querySelector("#contactme");

[aboutme, myprojects, contactme].forEach((element) => {
  element.addEventListener("click", () => {
    nav.classList.remove("visible");
  });
});

abrir.addEventListener("click", () => {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
  nav.classList.remove("visible");
});

document.addEventListener("click", function (event) {
  const isClickInsideNav = nav.contains(event.target);
  const isClickOnAbreMenu = event.target === abrir;

  if (!isClickInsideNav && !isClickOnAbreMenu) {
    nav.classList.remove("visible");
  }
});
