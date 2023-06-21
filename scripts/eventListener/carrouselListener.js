export default class CarrouselListener {
  static listen() {
    const carrousel = document.querySelector('.carrousel-wrapper');
    const prevButton = document.getElementById('slide-arrow-prev');
    const nextButton = document.getElementById('slide-arrow-next');

    nextButton.addEventListener('click', () => goToNextSlide());

    prevButton.addEventListener('click', () => goToPreviousSlide());

    function goToNextSlide() {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft += slideWidth;
    }
    function goToPreviousSlide() {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft -= slideWidth;
    }
    this.listenCarrouselTrigger();
  }

  static async listenCarrouselTrigger() {
    document.querySelector('body').addEventListener('click', (e) => {
      const overlay = document.querySelector('.overlay');
      const isACarrouselTrigger =
        e.target.classList.contains('carrousel-trigger');

      // On vérifie si l'élément est un carrousel trigger

      if (!isACarrouselTrigger) {
        return false;
      }

      // Si oui, on récupère la position de l'élément cliqué depuis un tableau

      const targetIndex = Array.from(
        document.querySelectorAll('.carrousel-trigger')
      ).indexOf(e.target);

      // On affiche la modale et on indique à la liseuse le contenu visible pour l'utilisateur

      overlay.classList.toggle('active');

      this.listenOverlayAriaHidden();
      // On bouge le carrousel à l'endroit de la photo cliquée pour l'afficher

      const carrousel = document.querySelector('.carrousel-wrapper');
      const slideWidth = carrousel.offsetWidth;

      carrousel.scrollLeft = slideWidth * targetIndex;

      // L'Overlay prend le focus pour la navigation au clavier (voir accessibilityListener.js )

      overlay.focus();
    });
  }

  static listenOverlayAriaHidden() {
    const overlay = document.querySelector('.overlay');
    const main = document.querySelector('main');

    if (overlay.classList.contains('active')) {
      overlay.setAttribute('aria-hidden', false);
      main.setAttribute('aria-hidden', true);
    } else {
      overlay.setAttribute('aria-hidden', true);
      main.setAttribute('aria-hidden', false);
    }
  }
}
