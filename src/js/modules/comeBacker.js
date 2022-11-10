export const comeBacker = () => {
  const openModal = () => {
    if (document.querySelector('.modal-layout').classList.length > 1) {
      document.querySelector('.modal-layout').classList.remove('modal-layout__novisible');
      document.querySelector('body').classList.add('modal__opened');
    } else if (document.querySelector('.modal-layout').classList.length <= 1) {
      document.querySelector('.modal-layout').classList.add('modal-layout__novisible');
      document.querySelector('body').classList.remove('modal__opened');
    }
  }

  document.querySelectorAll('a').forEach(elem => {
    if (elem.getAttribute('href') !== '#') {
      elem.addEventListener('click', (event) => {
        event.preventDefault();
        openModal();
      })
    }
  })
  document.addEventListener('mouseleave', (event) => {
    openModal();
  })
}