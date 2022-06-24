// import TypeIt from "typeit"

// new TypeIt(".main__title", {
//   strings: ["This is a great string.", "But here is a better one."],
//   speed: 50,
//   waitUntilVisible: true,
// }).go();


const toggleMenu = () => {
  const openMenu = document.querySelector(".btn-open");
  const closeMenu = document.querySelector(".btn-close");
  openMenu.addEventListener("click", () => {
    openMenu.classList.toggle("btn-back");
    closeMenu.classList.toggle("btn-front");
  });
  closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("btn-front");
    openMenu.classList.toggle("btn-back");
  });
};

toggleMenu();
