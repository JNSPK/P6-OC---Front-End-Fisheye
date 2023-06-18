export default class Carrousel {
  static buildAll(medias) {
    let html = '';
    medias.forEach((media) => {
      if (media.image) {
        html += this.buildPhoto(media);
      } else if (media.video) {
        html += this.buildVideo(media);
      }
      html += this.buildInfos(media);
    });

    return html;
  }
  static buildPhoto(media) {
    return `
    <section class="container-photo-overlay">
      <img src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.image}" alt="Illustration du photographe" />
      
          `;
  }
  static buildVideo(media) {
    return `
    <section class="container-photo-overlay">
      <video class="video" autoplay muted loop src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${media.photographerId}/${media.video}" alt="Illustration du photographe" />
      </video>  `;
  }

  static buildInfos(media) {
    return `
    <section class="infos-photo">
      <section class="card-title">${media.title}
      </section>
      </section>
    </section> `;
  }
}
