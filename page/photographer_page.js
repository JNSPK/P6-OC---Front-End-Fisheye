import PhotographerApi from '/P6-OC-Front-End-Fisheye/scripts/api/photographers_api.js';
import PhotographerInfos from '/P6-OC-Front-End-Fisheye/scripts/builder/photographerInfos_builder.js';
import MediaCard from '/P6-OC-Front-End-Fisheye/scripts/builder/mediaCard_builder.js';
import Carousel from '/P6-OC-Front-End-Fisheye/scripts/builder/carousel_builder.js';
import FilterEvent from '/P6-OC-Front-End-Fisheye/scripts/eventListener/filter_eventListener.js';

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
  PhotographerInfos.buildOneHeader(photographer);

document.querySelector('main').innerHTML +=
  PhotographerInfos.buildOneFooter(photographer);

const galleryElement = document.querySelector('.gallerie');

// Filtre

FilterEvent.listen();

// Confection des card photo et vidéos
const mediaCardsHtml = MediaCard.buildAll(medias);
galleryElement.innerHTML = mediaCardsHtml;

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
