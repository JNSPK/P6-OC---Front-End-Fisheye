// // A REMPLACER PAR DE LA DELEG

export default class CarrouselListener {
  static listen() {
    this.listenImg();
    const prevButton = document.getElementById('slide-arrow-prev');
    const nextButton = document.getElementById('slide-arrow-next');

    const carrousel = document.querySelector('.carrousel-wrapper');

    nextButton.addEventListener('click', () => {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft += slideWidth;
      console.log();
    });

    prevButton.addEventListener('click', () => {
      const slideWidth = carrousel.clientWidth;
      carrousel.scrollLeft -= slideWidth;
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

        // const targetImage = all.find((img) => img.src === e.target.src);
        console.log(all);
        console.log(targetIndex);

        const carrousel = document.querySelector('.carrousel-wrapper');
        const slideWidth = carrousel.offsetWidth;
        console.log(carrousel);
        carrousel.scrollLeft += slideWidth * targetIndex;

        // document.querySelector('.container-photo-overlay video').src =
        //   e.target.src;
      }
      const closeButton = document.querySelector('.close');
      const carrousel = document.querySelector('.carrousel-wrapper');

      closeButton.addEventListener('click', () => {
        const slideWidth = carrousel.scrollWidth;
        carrousel.scrollLeft -= slideWidth;
      });
    });
  }
}
