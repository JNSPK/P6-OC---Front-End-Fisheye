import PhotographerApi from '/scripts/api/photographersApi.js';
import MediaCard from '/scripts/builder/mediaCard.js';

export default class Filter {
  static listen() {
    this.listenFilter();
  }
  static async listenFilter() {
    document.querySelector('main').addEventListener('click', async (e) => {
      const isFilterButton = e.target.classList.contains('filterButton');

      if (isFilterButton) {
        const params = new URL(document.location).searchParams;
        const photographerId = Number(params.get('id'));
        const sortType = e.target.dataset['sort'];

        const photographerApi = new PhotographerApi();
        const medias = await photographerApi.getMediasByPhotographerId(
          photographerId
        );

        switch (sortType) {
          case 'title':
            const mediasSortedByTitle = medias.sort((a, b) =>
              a.title.localeCompare(b.title)
            );
            const sortedByTitle = MediaCard.buildAll(mediasSortedByTitle);
            document.querySelector('.gallerie').innerHTML = sortedByTitle;

            break;

          case 'likes':
            const mediasSortedByLikes = medias.sort(
              (a, b) => b.likes - a.likes
            );
            const sortedByLikes = MediaCard.buildAll(mediasSortedByLikes);
            document.querySelector('.gallerie').innerHTML = sortedByLikes;

            break;
          case 'date':
            const mediasSortedByDate = medias.sort((a, b) =>
              a.date.localeCompare(b.date)
            );

            const sortedByDate = MediaCard.buildAll(mediasSortedByDate);
            document.querySelector('.gallerie').innerHTML = sortedByDate;

            break;
        }
      }
    });
  }
}
