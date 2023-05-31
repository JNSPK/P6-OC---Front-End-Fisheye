import PhotographerApi from '../scripts/Api/photographersApi.js';
import PhotographHeader from '../scripts/Templates/photographHeader.js';
import MediaCard from '../scripts/Templates/mediaCard.js';
import LikesAndPrice from '../scripts/Templates/LikesAndPrice.js';

const params = new URL(document.location).searchParams;
let photographerId = Number(params.get('id'));

new PhotographerApi()
  .getMedias()
  .then((medias) =>
    medias.filter((media) => media.photographerId === photographerId)
  )
  .then((media) => {
    MediaCard.buildAll(media);
  })
  .catch((err) => {
    console.log(err);
  });

new PhotographerApi()
  .getPhotographers()
  .then((photographers) =>
    photographers.find((photographer) => photographer.id === photographerId)
  )
  .then((photographer) => {
    document.querySelector('.photograph-header').innerHTML +=
      PhotographHeader.buildOne(photographer);
  });

new PhotographerApi()
  .getPhotographers()
  .then((photographers) =>
    photographers.find((photographer) => photographer.id === photographerId)
  )
  .then((photographer) => {
    document.querySelector('main').innerHTML +=
      LikesAndPrice.buildOne(photographer);
  });
// getMedias().then((medias) =>
//   medias.reduce((accumulator, media) => accumulator + media.likes, 0)
// );
// .catch((err) => {
//   console.log(err);
// });
