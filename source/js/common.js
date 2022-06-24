const mobMenu = document.querySelector('.header__menu')
const openMenu = document.querySelector(".btn-open");
const closeMenu = document.querySelector(".btn-close");


const toggleMenu = () => {
  openMenu.addEventListener("click", () => {
    openMenu.classList.toggle("btn-back");
    closeMenu.classList.toggle("btn-front");
    if (openMenu.classList.contains('btn-back')) {
      mobMenu.classList.add('--menu-open')
    } else {
      mobMenu.classList.remove('--menu-open')
    }
  });
  closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("btn-front");
    openMenu.classList.toggle("btn-back");
  });
};

toggleMenu();


const closeIcon = document.querySelector('.close-icon')

closeIcon.addEventListener('click', () => {
  mobMenu.classList.remove('--menu-open')
  openMenu.classList.remove('btn-back')
  closeMenu.classList.remove('btn-front')
})
