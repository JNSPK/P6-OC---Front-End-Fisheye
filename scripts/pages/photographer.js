console.log();
async function getPhotographers() {
  // Récupère les données du fichier json avec fetch()
  let reponse = await fetch('./data/photographers.json', {
    headers: {
      Accept: 'application/json',
    },
  });

  if (reponse.ok) {
    return reponse.json();
  }
}

async function displayInfo(photographer) {
  // Dispatch les données en créant des éléments HTML (voir factories/photographers.js)
  const header = document.querySelector('.photograph-header');

  const photographerInfos = photographerFactory(photographer);
  const userInfoDOM = photographerInfos.getUserInfoDOM();
  header.appendChild(userInfoDOM);
}

async function displayPhoto(media, photographer) {
  const main = document.querySelector('main');

  const photographerMedia = media.filter((e) => {
    return e.photographerId === photographer.id;
  });

  // const photographerPhotos = mediaFactory({
  //   ...photographerMedia[1],
  //   name: photographer.name,
  // });
  photographerMedia.forEach((photos) => {
    const photosModel = mediaFactory(photos);
    const userPhotoDOM = photosModel.getPhotosDOM();
    main.appendChild(userPhotoDOM);
  });
}

async function init() {
  const { photographers, media } = await getPhotographers();
  // Récupère les id des photographes
  const params = new URL(document.location).searchParams;
  let photographerId = Number(params.get('id'));

  const photographer = photographers.find(({ id }) => id === photographerId);

  displayInfo(photographer);
  displayPhoto(media, photographer);
}

init();
