import PhotographerApi from '../scripts/Api/photographersApi.js';
import PhotographHeader from '../scripts/Templates/photographHeader.js';
import MediaCard from '../scripts/Templates/mediaCard.js';
import LikesAndPrice from '../scripts/Templates/LikesAndPrice.js';
import Carousel from '../scripts/Templates/carousel.js';

const params = new URL(document.location).searchParams;
let photographerId = Number(params.get('id'));

const Data = new PhotographerApi();

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

MediaCard.buildAll(medias);

document.querySelector('.photograph-header').innerHTML +=
  PhotographHeader.buildOne(photographer);

const totalLikes = medias.reduce(
  (accumulator, media) => accumulator + media.likes,
  0
);
document.querySelector('main').innerHTML += LikesAndPrice.buildOne({
  likes: totalLikes,
  price: photographer.price,
});

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
