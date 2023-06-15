// // A REMPLACER PAR DE LA DELEG

// const prevButton = document.getElementById('slide-arrow-prev');
// const nextButton = document.getElementById('slide-arrow-next');

// nextButton.addEventListener('click', () => {
//   const slideWidth = overlay.clientWidth;
//   slidesContainer.scrollLeft += slideWidth;
// });

// prevButton.addEventListener('click', () => {
//   const slideWidth = overlay.clientWidth;
//   slidesContainer.scrollLeft -= slideWidth;
// });

export default class Carrousel {
  static listen() {
    this.listenImg();
  }

  static async listenImg() {
    document.querySelector('main').addEventListener('click', (e) => {
      const isACarrouselTriggers =
        e.target.classList.contains('carrousel-trigger');
      const carrouselContainer = document.querySelector('.carrousel-container');

      if (isACarrouselTriggers) {
        carrouselContainer.classList.toggle('active');
        document.querySelector('.carrousel img').src = e.target.src;
        document.querySelector('.carrousel video').src = e.target.src;
      }
    });
  }
}
