import { PhotographerApi } from '/scripts/Api/api.js';
import { PhotographerCard } from '/scripts/Templates/photographerCard.js';
import { MediaCard } from '/scripts/Templates/mediaCard.js';

const photographersApi = new PhotographerApi('/data/photographers.json');

export class HomePage {
  constructor() {
    this.$photographersWrapper = document.querySelector(
      '.photographer_section'
    );
  }
  async main() {
    const photographers = await photographersApi.getPhotographers();
    photographers.forEach((photographer) => {
      const Template = new PhotographerCard(photographer);
      this.$photographersWrapper.appendChild(Template.createPhotographerCard());
    });
  }
}

export class MediaPage {
  constructor(photographerId) {
    this.$photographersWrapper = document.querySelector('.photograph-header');
    this.$mediasWrapper = document.querySelector('.gallerie');

    this.photographerFilter = (e) => {
      return e.photographerId === photographerId;
    };
  }

  async main() {
    const photographers = await photographersApi.getPhotographers();

    const currentPhotographer = photographers.filter(this.photographerFilter);
    console.log(currentPhotographer);
    // DO SOMETHING W Photographers data
    this.$photographersWrapper.innerHTML = currentPhotographer;

    const medias = await photographersApi.getMedia();
    const photographerMedia = medias.filter(this.photographerFilter);

    photographerMedia.forEach((media) => {
      const TemplateMedia = new MediaCard(media);
      this.$mediasWrapper.appendChild(TemplateMedia.createMediaCard());
    });
  }
}
