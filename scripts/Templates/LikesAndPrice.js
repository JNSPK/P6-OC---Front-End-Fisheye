export default class PhotographerInfos {
  static buildOne(photographer) {
    return `
          <article class="likes-price">
            <div>${photographer.likes} ♥</div><div>${photographer.price}€ / jour</div>
          </article>
     
        `;
  }
}
