function mediaFactory(data) {
  const { name, id, photographerId, title, image, video, likes, date, price } =
    data;

  const picture = `assets/images/FishEye_Photos/Sample Photos/Photographers ID Photos/${photographerId}/${image}`;
  const container = document.querySelector('.gallerie');
  const article = document.createElement('article');

  const img = document.createElement('img');
  img.setAttribute('src', picture);
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
