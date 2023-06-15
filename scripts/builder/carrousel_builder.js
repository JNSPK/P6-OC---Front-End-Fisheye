export default class Carrousel {
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
      <img src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.image}" alt="Illustration du photographe" />
      <section class="infos-photo-overlay">
              <section class="card-title-overlay">${media.title}
              </section>
              <section class="likes-overlay">${media.likes} 
              </section>
          `;
  }
  static buildVideo(media) {
    return `
      <video autoplay muted loop src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.video}" alt="Illustration du photographe" />
      <section class="infos-photo">
              <section class="card-title">${media.title}
              </section>
              <section class="likes">${media.likes} 
              </section>
          `;
  }
}
