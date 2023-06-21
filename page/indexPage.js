import PhotographerApi from '../scripts/api/photographersApi.js';
import PhotographerCard from '../scripts/builder/photographerCardBuilder.js';

new PhotographerApi()
  .getPhotographers()
  .then((photographers) => {
    PhotographerCard.buildAll(photographers);
  })
  .catch((err) => {
    console.log(err);
  });
