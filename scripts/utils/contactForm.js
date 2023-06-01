// Ouverture modale

function displayModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'block';
  const h2 = document.querySelector('.form-infos');
  h2.textContent = 'Contactez-moi ';
}

// Fermeture modale

function closeModal() {
  const modal = document.getElementById('contact_modal');
  modal.style.display = 'none';
}

// // Ajouter le nom dans le formulaire
// async function displayName(photographer) {
//   const modal = document.querySelector('.modal');
//   const h2 = modal.querySelector('h2');

//   ;
// }

// async function init() {
//   // Récupère les datas des photographes
//   const { photographers } = await getPhotographers();
//   const params = new URL(document.location).searchParams;
//   let photographerId = Number(params.get('id'));

//   const photographer = photographers.find(({ id }) => id === photographerId);

//   displayName(photographer);
// }

// init();
