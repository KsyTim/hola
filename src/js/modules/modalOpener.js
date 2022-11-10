export const modalOpener = () => {
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('a.article-content-text__marked')) {
      event.preventDefault();
      if (document.querySelector('.modal-layout').classList.length > 1) {
        document.querySelector('.modal-layout').classList.remove('modal-layout__novisible');
        document.querySelector('body').classList.add('modal__opened');
      }
    } else if (target.matches('.modal-layout')) {
      if (document.querySelector('.modal-layout').classList.length <= 1) {
        document.querySelector('.modal-layout').classList.add('modal-layout__novisible');
        document.querySelector('body').classList.remove('modal__opened');
      }
    }
  })
}