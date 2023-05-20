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
