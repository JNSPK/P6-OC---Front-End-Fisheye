export default class PhotographerHeaderCard {
  static buildOne(photographer) {
    return `
          <article>
            <img 
              src="assets/photographers/${photographer.portrait}" 
              alt="Illustration du photographe">
                <button class="contact_button" onclick="displayModal()">
                Contactez-moi 
              </button>
            <section class="infos"><h2>${photographer.name}</h2>
            <div class="localisation">${photographer.city}, ${photographer.country}
            </div>
            <div class="slogan">${photographer.tagline}
            </div>
            <div class="prix">${photographer.price}€/jour
            </div>
            </section>
          </article>
     
        `;
  }
}
