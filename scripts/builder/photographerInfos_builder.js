export default class PhotographerInfos {
  static buildOneHeader(photographer) {
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

  static buildOneFooter(photographer, medias) {
    let Footer = '';
    const likes = medias.map((medias) => medias.likes);

    const totalLikes = likes.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    Footer = `
<article class="likes-price">
  <div class= "likes"><div>${totalLikes}</div><div>♥</div></div><div class ="price">${photographer.price}€ / jour</div>
</article>

`;
    return Footer;
  }
}
