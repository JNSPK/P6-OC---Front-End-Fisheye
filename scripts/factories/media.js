function mediaFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  const picture = `assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${photographerId}/${image}`;
  const movie = `assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${photographerId}/${video}`;
  const container = document.querySelector('.gallerie');
  const article = document.createElement('article');

  if (image) {
    img = document.createElement('img');
    img.setAttribute('src', picture);
  } else {
    img = document.createElement('video');
    img.setAttribute('src', movie);
    img.setAttribute('type', 'video/mp4');
    img.setAttribute('controls', '');
    img.setAttribute('autoplay', '');
    img.setAttribute('loop', '');
    img.setAttribute('muted', '');
    img.setAttribute('preload', 'auto');
    img.setAttribute('playsinline', '');
  }

  img.setAttribute('alt', 'Illustration du photographe');
  function getPhotosDOM() {
    container.appendChild(article);
    article.appendChild(img);
    return container;
  }

  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    getPhotosDOM,
  };
}
