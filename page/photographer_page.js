import PhotographerApi from './../scripts/api/photographers_api.js';
import PhotographerInfos from './../scripts/builder/photographerInfos_builder.js';
import MediaCard from './../scripts/builder/mediaCard_builder.js';
import Carrousel from '../scripts/builder/carrousel_builder.js';
import FilterEvent from './../scripts/eventListener/filter_eventListener.js';
import LikesEvent from '../scripts/eventListener/likes_eventListener.js';
import CarrouselListener from '../scripts/eventListener/carrousel_eventListener.js';
import Accessibility from '../scripts/eventListener/body_eventListener.js';

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

document.querySelector('.footer').innerHTML += PhotographerInfos.buildOneFooter(
  photographer,
  medias
);

const galleryElement = document.querySelector('.gallerie');

// Filtre

FilterEvent.listen();

// Confection des card photo et vidéos
const mediaCardsHtml = MediaCard.buildAll(medias);
galleryElement.innerHTML = mediaCardsHtml;

// Carrousel photo en plein écran
document.querySelector('.carrousel').innerHTML += Carrousel.buildAll(medias);
// document.querySelector('.carrousel-wrapper').innerHTML +=
//   Carrousel.buildInfos(medias);

// Likes

LikesEvent.listen();

// Carrousel

CarrouselListener.listen();

// Accessibility

Accessibility.listen();
