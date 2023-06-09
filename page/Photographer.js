import PhotographerApi from '/scripts/api/photographersApi.js';
import PhotographHeader from '/scripts/builder/photographHeader.js';
import MediaCard from '/scripts/builder/mediaCard.js';
import LikesAndPrice from '../scripts/builder/likesAndPrice.js';
import Carousel from '/scripts/builder/carousel.js';
import FilterEvent from '/scripts/eventListener/filter.js';

// Récupération de l'ID du photographe dans l'URL
const params = new URL(document.location).searchParams;
const photographerId = Number(params.get('id'));

// Récupération des donnés avec fetch
const Data = new PhotographerApi();

// Retour de toutes les promesses pour définir les datas
const [medias, photographer] = await Promise.all([
  Data.getMediasByPhotographerId(photographerId),
  Data.getPhotographerById(photographerId),
]);

// Confection du header photographe
document.querySelector('.photograph-header').innerHTML +=
  PhotographHeader.buildOne(photographer);

const galleryElement = document.querySelector('.gallerie');

// Filtre

FilterEvent.listen();

// Confection des card photo et vidéos
const mediaCardsHtml = MediaCard.buildAll(medias);
galleryElement.innerHTML = mediaCardsHtml;
// document.querySelector('.gallerie').innerHTML += MediaCard.buildAll(medias);

// Carousel photo en plein écran
galleryElement.innerHTML += Carousel.buildOne(medias);

const carouselContainer = document.querySelector('.carousel-container');
const carouselTriggers = document.querySelectorAll('.carousel-trigger');

carouselTriggers.forEach(
  (trigger) =>
    (trigger.onclick = () => {
      document.querySelector('.carousel img').src = trigger.getAttribute('src');
      toggleModal();
    })
);

function toggleModal() {
  carouselContainer.classList.toggle('active');
}

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
