export default class PhotographerApi {
  /**
   *
   * @param {string}
   */
  constructor() {
    this.url = './data/photographers.json';
  }

  getData() {
    return fetch(this.url).then((res) => res.json());
  }

  getPhotographers() {
    return this.getData().then((res) => res.photographers);
  }
  getMedias() {
    return this.getData().then((res) => res.media);
  }
  getMediasByPhotographerId(photographerId) {
    return this.getMedias().then((medias) => {
      const filteredMedias = medias.filter(
        (media) => media.photographerId === photographerId
      );
      return Promise.resolve(filteredMedias);
    });
  }

  getPhotographerById(photographerId) {
    return this.getPhotographers().then((photographers) => {
      return photographers.find((photographer) => {
        return photographer.id === photographerId;
      });
    });
  }
  getPhotographerMedias(photographerId) {
    return this.getMedias().then((medias) => {
      return medias.filter((media) => {
        console.log(media, photographerId);
        return media.photographerId === photographerId;
      });
    });
  }
  // getMediasByType(type) {
  //   return this.getMedias().then((medias) => {
  //     return medias.filter((media) => {
  //       return media[type] === type;
  //     });
  //   });
  // }
}
