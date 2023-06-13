import PhotographerApi from '/scripts/api/photographers_api.js';
// import MediaCard from '/scripts/builder/mediaCard_builder.js';
import PhotographerInfos from '/scripts/builder/photographerInfos_builder.js';

export default class Likes {
  static listen() {
    this.listenLikes();
  }

  static async listenLikes() {
    document.querySelector('.gallerie').addEventListener('click', async (e) => {
      const isLikeButton = e.target.matches('[data-like]');

      if (isLikeButton) {
        const params = new URL(document.location).searchParams;
        const photographerId = Number(params.get('id'));
        const photographerApi = new PhotographerApi();
        const medias = await photographerApi.getMediasByPhotographerId(
          photographerId
        );
        const likes = medias.map((medias) => medias.likes);

        const totalLikes = likes.reduce(
          (accumulator, currentValue) => accumulator + currentValue,
          0
        );
        console.log(likes);

        document.querySelector('main').innerHTML +=
          PhotographerInfos.buildOneFooter(photographer, medias);
      }
    });
  }
}
