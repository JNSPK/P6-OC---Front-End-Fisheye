/* eslint-disable no-case-declarations */
/* eslint-disable no-inner-declarations */
import PhotographerApi from '/scripts/api/photographers_api.js';
import MediaCard from '/scripts/builder/mediaCard_builder.js';

export default class Filter {
  static listen() {
    this.listenFilter();
  }
  static async listenFilter() {
    document.querySelector('main').addEventListener('click', async (e) => {
      const isFilterButton = e.target.matches('[data-dropdown-button]');
      let currentDropdownButton;
      const menu = document.querySelector('.dropdown');

      if (isFilterButton) {
        const params = new URL(document.location).searchParams;
        const photographerId = Number(params.get('id'));
        const photographerApi = new PhotographerApi();
        const medias = await photographerApi.getMediasByPhotographerId(
          photographerId
        );
        const sortType = e.target.dataset['sort'];

        // On applique le cas selon le type de tri

        switch (sortType) {
          case 'likes':
            const mediasSortedByLikes = medias.sort(
              (a, b) => b.likes - a.likes
            );
            const sortedByLikes = MediaCard.buildAll(mediasSortedByLikes);
            document.querySelector('.gallerie').innerHTML = sortedByLikes;

            break;
          case 'title':
            const mediasSortedByTitle = medias.sort((a, b) =>
              a.title.localeCompare(b.title)
            );
            const sortedByTitle = MediaCard.buildAll(mediasSortedByTitle);
            document.querySelector('.gallerie').innerHTML = sortedByTitle;

            break;

          case 'date':
            const mediasSortedByDate = medias.sort((a, b) =>
              a.date.localeCompare(b.date)
            );

            const sortedByDate = MediaCard.buildAll(mediasSortedByDate);
            document.querySelector('.gallerie').innerHTML = sortedByDate;

            break;
        }

        currentDropdownButton = e.target.closest('[data-dropdown-button]');
        currentDropdownButton.classList.toggle('active');
        menu.classList.toggle('active');

        document
          .querySelectorAll('[data-dropdown-button].active')
          .forEach((dropdownButton) => {
            if (dropdownButton === currentDropdownButton) return;
            dropdownButton.classList.remove('active');
          });

        function show(a) {
          document.querySelector('.selected').value = a;
        }

        const selectedOption = document.querySelector(
          '[data-dropdown-button].active'
        );
        document
          .querySelector('li')
          .addEventListener('onclick', show(selectedOption.textContent));
      }
    });
  }
}
