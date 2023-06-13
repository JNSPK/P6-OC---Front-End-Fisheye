export default class MediaCard {
  static buildAll(medias) {
    // let totalLikes = 0;
    let html = '';
    medias.forEach((media) => {
      // totalLikes += parseInt(media.likes);
      if (media.image) {
        html += this.buildPhoto(media);
      } else if (media.video) {
        html += this.buildVideo(media);
      }
    });

    return html;

    //   // Ajout de la donnée sur le site (avec affichage du prix)
    //   document.querySelector('main').innerHTML += `<article class="likes-price">
    //   <div>${totalLikes} ♥</div><div>${photographer.price}€ / jour</div>
    // </article>`;
  }
  static buildPhoto(media) {
    return `
   <article class="card-photo-wrapper">
      <section class="img-wrapper">
          <img class="carousel-trigger"
            src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.image}"
            alt="Illustration du photographe">
      </section>
          <section class="infos-photo">
              <section class="card-title">${media.title}
              </section>
              <section class="likes">${media.likes} <button class="like" data-like>❤️</button>
              </section>
        </section>
    </article>
    `;
  }

  static buildVideo(media) {
    return `
   <article class="card-photo-wrapper">
      <section class="img-wrapper">
          <video class="carousel-trigger" autoplay muted controls
            src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.video}"
            alt="Illustration du photographe">
      </section>
          <section class="infos-photo">
              <section class="card-title">${media.title}
              </section>
              <section class="likes">${media.likes} <button class="like" data-like>❤️</button>
              </section>
        </section>
    </article>
    `;
  }
}
