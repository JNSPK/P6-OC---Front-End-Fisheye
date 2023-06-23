export default class ContactForm {
  static listen() {
    document
      .querySelector('.contact_button')
      .addEventListener('click', this.displayForm);

    document
      .querySelector('.close-modal-form')
      .addEventListener('click', this.closeForm);

    document.querySelector('body').addEventListener('keydown', (e) => {
      const keyCode = e.key;

      if (
        // A l'appui sur 'echap' sur la croix du formulaire
        (document.getElementById('contact_modal').style.display === 'block' &&
          keyCode === 'Escape') ||
        // A l'appui sur entrée lors du focus sur la croix de fermeture
        (keyCode === 'Enter' && e.target.classList.contains('close-modal-form'))
      ) {
        document.querySelector('.close-modal-form').click();
      }
    });
  }

  // Ouverture modale

  static displayForm() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'block';

    // Indications du contenu actif pour la liseuse

    document.querySelector('#contact_modal').setAttribute('aria-hidden', false);
    document.querySelector('main').setAttribute('aria-hidden', true);
    document.querySelector('main').setAttribute('inert', true);
    document.querySelector('header').setAttribute('inert', true);

    // On donne le focus à la croix de fermeture du formulaire

    document.querySelector('.close-modal-form').focus();
  }

  // Fermeture modale

  static closeForm() {
    const modal = document.getElementById('contact_modal');
    modal.style.display = 'none';

    // Indications du contenu actif pour la liseuse

    document.querySelector('#contact_modal').setAttribute('aria-hidden', true);
    document.querySelector('main').setAttribute('aria-hidden', false);
    document.querySelector('main').removeAttribute('inert');
    document.querySelector('header').removeAttribute('inert');

    // On donne le focus à la p age principale

    document.querySelector('main').focus();
  }
}
