import PhotographerApi from '/scripts/api/photographersApi.js';
import PhotographerCard from '/scripts/builder/photographerCard.js';

new PhotographerApi()
  .getPhotographers()
  .then((photographers) => {
    PhotographerCard.buildAll(photographers);
  })
  .catch((err) => {
    console.log(err);
  });
