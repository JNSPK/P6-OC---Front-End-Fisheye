import PhotographerApi from '../scripts/Api/photographersApi.js';
import PhotographHeader from '../scripts/builder/photographHeader.js';
import MediaCard from '../scripts/builder/mediaCard.js';
import LikesAndPrice from '../scripts/builder/LikesAndPrice.js';
import Carousel from '../scripts/builder/carousel.js';
import Filtre from '../scripts/builder/filtre.js';

// Récupération de l'ID du photographe dans l'URL
const params = new URL(document.location).searchParams;
let photographerId = Number(params.get('id'));

// Récupération des donnés avec fetch
const Data = new PhotographerApi();

// Retour de toutes les promesses pour définir les datas

const [medias, photographer] = await Promise.all([
  Data.getMedias()
    .then((medias) =>
      medias.filter((media) => media.photographerId === photographerId)
    )
    .catch((err) => {
      console.log(err);
    }),
  Data.getPhotographers()
    .then((photographers) =>
      photographers.find((photographer) => photographer.id === photographerId)
    )
    .catch((err) => {
      console.log(err);
    }),
]);

// Confection du header photographe

document.querySelector('.photograph-header').innerHTML +=
  PhotographHeader.buildOne(photographer);

// Affichage du filtre

document.querySelector('.gallerie').innerHTML += Filtre.buildOne(
  medias,
  photographer
);

document.querySelector('.populaire').addEventListener('click', sortByPopulaire);
document.querySelector('.titre').addEventListener('click', sortByTitle);
document.querySelector('.date').addEventListener('click', sortByDate);

function sortByPopulaire() {
  MediaCard.buildAll(
    medias.sort(function (a, b) {
      return b - a;
    })
  );
}
function sortByTitle() {
  MediaCard.buildAll(medias.sort());
}
function sortByDate() {
  MediaCard.buildAll(
    medias.sort(function (a, b) {
      return b - a;
    })
  );
}

// Confection des card photo et vidéos

MediaCard.buildAll(medias);

// Reduce pour obtenir le nombre total de likes

const totalLikes = medias.reduce(
  (accumulator, media) => accumulator + media.likes,
  0
);

// Ajout de la donnée sur le site (avec affichage du prix)

document.querySelector('main').innerHTML += LikesAndPrice.buildOne({
  likes: totalLikes,
  price: photographer.price,
});

// Carousel photo en plein écran

document.querySelector('.gallerie').innerHTML += Carousel.buildOne(medias);

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
