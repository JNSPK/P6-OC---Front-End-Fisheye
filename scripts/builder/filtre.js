export default class Filtre {
  static buildOne() {
    return `
        <section class="filtre">
            Trier par : 
                            <div class="options">
                                <button class="populaire">Popularité</button>
                                <button class="titre">Titre</button>
                                <button class="date">Date</button>
                            </div>
                        
        </section>
         
            `;
  }
}
