export default class ContactForm {
  static listen() {
    document
      .querySelector('.contact_button')
      .addEventListener('click', this.displayModal);

    document
      .querySelector('.close-modal-form')
      .addEventListener('click', this.closeModal);

    document.querySelector('body').addEventListener('keydown', (e) => {
      const keyCode = e.key;

      if (
        // A l'appui sur 'echap' sur la croix du formulaire
        (document.getElementById('contact_modal').style.display === 'block' &&
          keyCode === 'Escape') ||
        (keyCode === 'Enter' && e.target.classList.contains('close-modal-form'))
      ) {
        document.querySelector('.close-modal-form').click();
      }
    });
  }
  // Ouverture modale
  static displayModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';
    const h2 = document.querySelector('.form-infos');
    h2.textContent = 'Contactez-moi ';
    document.querySelector('#contact_modal').setAttribute('aria-hidden', false);
    document.querySelector('main').setAttribute('aria-hidden', true);
    document.querySelector('.close-modal-form').focus();
  }
  // Fermeture modale
  static closeModal() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';
    document.querySelector('#contact_modal').setAttribute('aria-hidden', true);
    document.querySelector('main').setAttribute('aria-hidden', false);
  }
}
