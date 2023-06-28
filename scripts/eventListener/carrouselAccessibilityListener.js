import CarrouselListener from './carrouselClickListener.js';

export default class Accessibility {
  static listenKeyboard() {
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    const carrousel = document.querySelector('.carrousel-wrapper');

    body.addEventListener('keydown', (e) => {
      const keyCode = e.key;

      if (
        // A l'appui sur la flèche de droite
        keyCode === 'ArrowRight'
      ) {
        goToNextSlide();
      } else if (
        // A l'appui sur la flèche de gauche
        keyCode === 'ArrowLeft'
      ) {
        goToPreviousSlide();
      }
      function goToNextSlide() {
        const slideWidth = carrousel.clientWidth;
        carrousel.scrollLeft += slideWidth;
      }
      function goToPreviousSlide() {
        const slideWidth = carrousel.clientWidth;
        carrousel.scrollLeft -= slideWidth;
      }

      // A l'appui sur 'echap' ou 'entrée' sur la croix de la modale

      if (
        keyCode === 'Escape' ||
        (keyCode === 'Enter' && e.target.classList.contains('close-overlay'))
      ) {
        // On cache la modale

        overlay.classList.remove('active');

        // On indique à la liseuse le contenu actif

        CarrouselListener.displayAttributes();
      }

      // A l'appui sur 'entrée' sur une image de la gallerie

      if (keyCode === 'Enter' && e.target.classList.contains('img-wrapper')) {
        // On affiche la modale
        overlay.classList.add('active');

        // On récupère la position de l'élément séléctionné au clavier depuis un tableau

        const targetIndex = Array.from(
          document.querySelectorAll('.img-wrapper')
        ).indexOf(e.target);

        // On bouge le carrousel à l'endroit de la photo séléctionnée au clavier pour l'afficher

        const carrousel = document.querySelector('.carrousel-wrapper');
        const slideWidth = carrousel.clientWidth;

        carrousel.scrollLeft = slideWidth * targetIndex;

        // L'overlay prend le focus pour la navigation au clavier en commençant par la croix de fermeture

        document.querySelector('.close-overlay').focus();

        // On indique à la liseuse le contenu actif

        CarrouselListener.displayAttributes();
      }
    });
  }
}
