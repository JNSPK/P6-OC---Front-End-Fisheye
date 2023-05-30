export class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const $wrapper = document.createElement('div');
    $wrapper.classList.add('photographer_card_wrapper');

    const photographerCard = `
      <a href="./photographer.html?id=${this._photographer.id}" aria-label="Lien vers la page de ${this._photographer.name}" title="${this._photographer.name}">
        <article>
          <img 
            src="assets/photographers/${this._photographer.portrait}" 
            alt="Illustration du photographe">
              <h2>${this._photographer.name}</h2>
          <section class="infos">
          <div class="localisation">${this._photographer.city}, ${this._photographer.country}
          </div>
          <div class="slogan">${this._photographer.tagline}
          </div>
          <div class="prix">${this._photographer.price}€/jour
          </div>
          </section>
        </article>
      </a>
      `;

    $wrapper.innerHTML = photographerCard;
    return $wrapper;
  }
}
