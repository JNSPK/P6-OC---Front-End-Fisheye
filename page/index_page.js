import PhotographerApi from '/scripts/api/photographers_api.js';
import PhotographerCard from '/scripts/builder/photographerCard_builder.js';

new PhotographerApi()
  .getPhotographers()
  .then((photographers) => {
    PhotographerCard.buildAll(photographers);
  })
  .catch((err) => {
    console.log(err);
  });
