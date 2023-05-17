function photographerFactory(data) {
  const { name, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement('article');

    const img = document.createElement('img');
    img.setAttribute('src', picture);

    const h2 = document.createElement('h2');
    h2.textContent = name;

    const infos = document.createElement('section');
    infos.className = 'infos';

    const localisation = document.createElement('div');
    localisation.textContent = city + ', ' + country;
    localisation.className = 'localisation';

    const slogan = document.createElement('div');
    slogan.textContent = tagline;
    slogan.className = 'slogan';

    const prix = document.createElement('div');
    prix.textContent = price + '€/jour';
    prix.className = 'prix';

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(infos);
    infos.appendChild(localisation);
    infos.appendChild(slogan);
    infos.appendChild(prix);

    return article;
  }
  return { name, city, country, tagline, price, picture, getUserCardDOM };
}
