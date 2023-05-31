export default class MediaCard {
  static buildAll(medias) {
    medias.forEach((media) => {
      document.querySelector('.gallerie').innerHTML += this.buildOne(media);
    });
  }

  static buildOne(media) {
    return `
   <article class="card-photo-wrapper">
      <section class="img-wrapper">
          <img 
            src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.image}"
            alt="Illustration du photographe">
      </section>
          <section class="infos-photo">
              <section class="card-title">${media.title}
              </section>
              <section class="likes">${media.likes} ❤️
              </section>
        </section>
    </article>
    `;
  }
}
