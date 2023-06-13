import PhotographerApi from '/scripts/api/photographers_api.js';
import MediaCard from '/scripts/builder/mediaCard_builder.js';

export default class Likes {
  static listen() {
    this.listenLikes();
  }

  static async listenLikes() {
    document.querySelector('main').addEventListener('click', async (e) => {
      const isLikeButton = e.target.matches('.like');

      if (isLikeButton) {
        console.log('yeaah');
      }
    });
  }
}
