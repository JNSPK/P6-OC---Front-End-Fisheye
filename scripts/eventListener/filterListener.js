import PhotographerApi from '../api/photographersApi.js';
import MediaCard from '../builder/mediaCardBuilder.js';
import Carrousel from '../builder/carrouselBuilder.js';

export default class FilterListener {
	static listen() {
		this.listenFilter();
	}
	static async listenFilter() {
		document.querySelector('main').addEventListener('click', async (e) => {
			const isFilterButton = e.target.matches('[data-dropdown-button]');
			let currentDropdownButton;
			const menu = document.querySelector('.dropdown');

			if (isFilterButton) {
				// On applique le cas selon le type de tri
				const sortType = e.target.dataset['sort'];
				mySwitch(sortType);

				currentDropdownButton = e.target.closest('[data-dropdown-button]');
				currentDropdownButton.classList.toggle('active');
				menu.classList.toggle('active');

				document
					.querySelectorAll('[data-dropdown-button].active')
					.forEach((dropdownButton) => {
						if (dropdownButton === currentDropdownButton) return;
						dropdownButton.classList.remove('active');
					});

				const selectedOption = document.querySelector(
					'[data-dropdown-button].active'
				);

				if (
					currentDropdownButton === document.querySelector('input.selected')
				) {
					show(currentDropdownButton.placeholder);
				} else {
					show(selectedOption.textContent);
					console.log(selectedOption.textContent);
				}
			}
		});
		document.querySelector('body').addEventListener('keydown', (e) => {
			const keyCode = e.key;

			const menu = document.querySelector('.dropdown');
			const isDropdownButton = e.target.classList.contains('dropdown');
			if (isDropdownButton && keyCode === 'Enter') {
				menu.classList.toggle('active');

				const sortType = e.target.dataset['sort'];
				mySwitch(sortType);
			}
			if (menu.classList.contains('active')) {
				document
					.querySelectorAll('li')
					.forEach((li) => li.setAttribute('tabindex', '3'));
			} else {
				document
					.querySelectorAll('li')
					.forEach((li) => li.removeAttribute('tabindex', '3'));
			}
		});

		function show(a) {
			document.querySelector('.selected').value = a;
		}
		async function mySwitch(sortType) {
			const params = new URL(document.location).searchParams;
			const photographerId = Number(params.get('id'));
			const photographerApi = new PhotographerApi();
			const medias = await photographerApi.getMediasByPhotographerId(
				photographerId
			);

			switch (sortType) {
				case 'likes':
					{
						const mediasSortedByLikes = medias.sort(
							(a, b) => b.likes - a.likes
						);
						const sortedByLikes = MediaCard.buildAll(mediasSortedByLikes);
						document.querySelector('.gallerie').innerHTML = sortedByLikes;
						document.querySelector('.carrousel').innerHTML =
							Carrousel.buildAll(medias);
					}
					break;
				case 'title':
					{
						const mediasSortedByTitle = medias.sort((a, b) =>
							a.title.localeCompare(b.title)
						);
						const sortedByTitle = MediaCard.buildAll(mediasSortedByTitle);
						document.querySelector('.gallerie').innerHTML = sortedByTitle;
						document.querySelector('.carrousel').innerHTML =
							Carrousel.buildAll(medias);
					}
					break;

				case 'date':
					{
						const mediasSortedByDate = medias.sort((a, b) =>
							a.date.localeCompare(b.date)
						);

						const sortedByDate = MediaCard.buildAll(mediasSortedByDate);
						document.querySelector('.gallerie').innerHTML = sortedByDate;
						document.querySelector('.carrousel').innerHTML =
							Carrousel.buildAll(medias);
					}
					break;
			}
		}
	}
}
