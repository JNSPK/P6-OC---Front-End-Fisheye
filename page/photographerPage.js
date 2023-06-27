import PhotographerApi from './../scripts/api/photographersApi.js';
import PhotographerInfos from './../scripts/builder/photographerInfosBuilder.js';
import MediaCard from './../scripts/builder/mediaCardBuilder.js';
import Carrousel from '../scripts/builder/carrouselBuilder.js';
import FilterEvent from './../scripts/eventListener/filterListener.js';
import LikesEvent from '../scripts/eventListener/likesListener.js';
import CarrouselListener from '../scripts/eventListener/carrouselListener.js';
import ContactForm from '../scripts/eventListener/contactFormListener.js';
import Accessibility from '../scripts/eventListener/accessibilityListener.js';

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

// Likes

LikesEvent.listen();

// Carrousel

CarrouselListener.listen();

// Accessibility

Accessibility.listenKeyboard();

// Contact Form

ContactForm.listen();
