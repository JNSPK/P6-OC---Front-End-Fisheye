export default class MediaCard {
  static buildAll(medias) {
    let html = '';
    medias.forEach((media) => {
      if (media.image) {
        html += this.buildPhoto(media);
      } else if (media.video) {
        html += this.buildVideo(media);
      }
    });

    return html;
  }
  static buildPhoto(media) {
    return `
   <article class="card-photo-wrapper">
      <section class="img-wrapper" tabindex="4">
          <img class="carrousel-trigger" 
            src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.image}"
            alt="Illustration du photographe" aria-label="agrandir l'image">
      </section>
          <section class="infos-photo">
              <section class="card-title">${media.title}
              </section>
              <section class="likes">${media.likes} 
              </section><button class="like-button" aria-label="boutton like" tabindex="4" data-like-button data-liked ="false"><div class="like-button-filled"></div></button>
        </section>
    </article>
    `;
  }

  static buildVideo(media) {
    return `
   <article class="card-photo-wrapper">
      <section class="img-wrapper" tabindex="4">
          <video class="carrousel-trigger video"   autoplay muted loop 
            src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.video}"
            alt="Illustration du photographe" aria-label="agrandir la video">
      </section>
          <section class="infos-photo">
              <section class="card-title">${media.title}
              </section>
              <section class="likes">${media.likes}
              </section><button class="like-button" aria-label="boutton like" tabindex="4" data-like-button data-liked ="false"><div class="like-button-filled"></div></button>
        </section>
    </article>
    `;
  }
}
