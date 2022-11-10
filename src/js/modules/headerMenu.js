export const headerMenu = () => {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('.header-menu-button') || target.matches('.header-menu-icon') || target.closest('a') && target.closest('a').matches('.header-menu-button')) {
      if (document.querySelector('.header-menu__visible').classList.length > 1) {
        document.querySelector('.header-menu__visible').classList.remove('header-menu__visible-no');
        document.querySelector('.layout').classList.add('layout__visible');
      } 
    } else if (target.matches('.menu-header-close') || target.closest('a') && target.closest('a').matches('.menu-header-close')) {
      if (document.querySelector('.header-menu__visible').classList.length <= 1) {
        document.querySelector('.header-menu__visible').classList.add('header-menu__visible-no');
        document.querySelector('.layout').classList.remove('layout__visible');
      } 
    }
  })
}