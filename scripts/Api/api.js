class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this._url = url;
  }

  async get() {
    return fetch(this._url)
      .then((res) => res.json())
      .catch((err) => console.log('Une erreur est survenue', err));
  }
}

export class PhotographerApi extends Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    super(url);
  }

  async getPhotographers() {
    const res = await this.get();
    return res.photographers;
  }
  async getMedia() {
    const res = await this.get();
    return res.media;
  }
}
