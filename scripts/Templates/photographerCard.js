export default class PhotographerCard {
  static buildAll(photographers) {
    photographers.forEach((photographer) => {
      document.querySelector('.photographer-section').innerHTML +=
        this.buildOne(photographer);
    });
  }

  static buildOne(photographer) {
    return `
    <div class="photographer-card-wrapper">
      <a href="./photographer.html?id=${photographer.id}" aria-label="Lien vers la page de ${photographer.name}" title="${photographer.name}">
        <article>
          <img 
            src="assets/photographers/${photographer.portrait}" 
            alt="Illustration du photographe">
              <h2>${photographer.name}</h2>
          <section class="infos">
          <div class="localisation">${photographer.city}, ${photographer.country}
          </div>
          <div class="slogan">${photographer.tagline}
          </div>
          <div class="prix">${photographer.price}€/jour
          </div>
          </section>
        </article>
      </a>
      </div>
      `;
  }
}
