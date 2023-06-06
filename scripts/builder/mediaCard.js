export default class MediaCard {
  static buildAll(medias) {
    medias.forEach((media) => {
      if (media.image) {
        document.querySelector('.gallerie').innerHTML += this.buildPhoto(media);
      } else if (media.video) {
        document.querySelector('.gallerie').innerHTML += this.buildVideo(media);
      }
    });
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
              <section class="likes">${media.likes} ❤️
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
              <section class="likes">${media.likes} ❤️
              </section>
        </section>
    </article>
    `;
  }
}
