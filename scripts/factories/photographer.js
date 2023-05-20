function photographerFactory(data) {
  const { name, city, country, tagline, price, portrait, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const article = document.createElement('article');

  // Création User card

  const link = document.createElement('a');
  link.setAttribute('href', '../photographer.html?id=' + id);
  link.setAttribute('aria-label', 'Lien vers la page de ' + name);
  link.setAttribute('title', name);

  const img = document.createElement('img');
  img.setAttribute('src', picture);
  img.setAttribute('alt', 'Illustration du photographe');

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

  function getUserCardDOM() {
    link.appendChild(article);
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(infos);
    infos.appendChild(localisation);
    infos.appendChild(slogan);
    infos.appendChild(prix);

    return link;
  }

  function getUserInfoDOM() {
    infos.appendChild(h2);
    article.appendChild(infos);
    article.appendChild(document.querySelector('.contact_button'));
    infos.appendChild(localisation);
    infos.appendChild(slogan);
    article.appendChild(img);
    return article;
  }

  return {
    name,
    city,
    country,
    tagline,
    price,
    picture,
    id,
    getUserCardDOM,
    getUserInfoDOM,
  };
}
