export default class CarrouselListener {
  static listen() {
    this.listenImg();
    const carrousel = document.querySelector('.carrousel-wrapper');
    const prevButton = document.getElementById('slide-arrow-prev');
    const nextButton = document.getElementById('slide-arrow-next');
    const closeButton = document.querySelector('.close');

    nextButton.addEventListener('click', () => {
      next();
    });

    prevButton.addEventListener('click', () => {
      previous();
    });

    closeButton.addEventListener('click', () => {
      carrousel.scrollLeft = 0;
    });

    carrousel.keydown((e) => {
      const keyCode = e.keyCode ? e.keyCode : e.which;

      if (keyCode === 39) {
        next();
      } else if (keyCode === 37) {
        previous();
      } else if (keyCode === 27) {
        const overlay = document.querySelector('.overlay');
        overlay.classList.toggle('active');
        carrousel.scrollLeft = 0;
      }
    });
    function next() {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft += slideWidth;
    }
    function previous() {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft -= slideWidth;
    }
  }

  static async listenImg() {
    document.querySelector('body').addEventListener('click', (e) => {
      const attrToggle = (el, attr) =>
        el.getAttribute(attr) == 'false'
          ? el.setAttribute(attr, 'true')
          : el.setAttribute(attr, 'false');

      const main = document.querySelector('main');
      const overlay = document.querySelector('.overlay');
      const isACarrouselTrigger =
        e.target.classList.contains('carrousel-trigger');
      const all = Array.from(document.querySelectorAll('.carrousel-trigger'));
      const targetIndex = all.indexOf(e.target);

      if (isACarrouselTrigger && targetIndex < 12 && targetIndex >= 0) {
        overlay.classList.toggle('active');
        attrToggle(overlay, ['aria-hidden']);
        attrToggle(main, ['aria-hidden']);

        const carrousel = document.querySelector('.carrousel-wrapper');
        const slideWidth = carrousel.offsetWidth;

        carrousel.scrollLeft = slideWidth * targetIndex;
      }
    });
  }
}
