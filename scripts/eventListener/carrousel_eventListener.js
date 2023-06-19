// // A REMPLACER PAR DE LA DELEG

export default class CarrouselListener {
  static listen() {
    this.listenImg();
    const prevButton = document.getElementById('slide-arrow-prev');
    const nextButton = document.getElementById('slide-arrow-next');

    const carrousel = document.querySelector('.carrousel-wrapper');
    const closeButton = document.querySelector('.close');
    nextButton.addEventListener('click', () => {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft += slideWidth;
      console.log();
    });

    prevButton.addEventListener('click', () => {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft -= slideWidth;
    });

    closeButton.addEventListener('click', () => {
      const slideWidth = carrousel.scrollWidth;
      carrousel.scrollLeft -= slideWidth;
      console.log(carrousel.scrollLeft);
    });
  }

  static async listenImg() {
    document.querySelector('main').addEventListener('click', (e) => {
      const isACarrouselTrigger =
        e.target.classList.contains('carrousel-trigger');
      const overlay = document.querySelector('.overlay');
      const all = Array.from(document.querySelectorAll('.carrousel-trigger'));
      const targetIndex = all.indexOf(e.target);
      if (isACarrouselTrigger && targetIndex < 12 && targetIndex >= 0) {
        overlay.classList.toggle('active');

        const carrousel = document.querySelector('.carrousel-wrapper');
        const slideWidth = carrousel.offsetWidth;

        carrousel.scrollLeft += slideWidth * targetIndex;
      }
    });
  }
}
