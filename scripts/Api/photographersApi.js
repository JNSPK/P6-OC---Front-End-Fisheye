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
}
