export class MediaCard {
  constructor(media) {
    this._media = media;
  }

  createMediaCard() {
    const $wrapper = document.createElement('article');
    $wrapper.classList.add('photo_wrapper');

    const mediaCard = `
   
      <img 
        src="assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${this._media.photographerId}/${this._media.image}"
        alt="Illustration du photographe">
    `;

    $wrapper.innerHTML = mediaCard;
    return $wrapper;
  }
}
